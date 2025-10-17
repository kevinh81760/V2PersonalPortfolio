"use client";

import Matter from "matter-js";
import { useEffect, useRef, useState } from "react";
import { useContactModalStore } from "@/lib/zustand/stores";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Button configuration
const BUTTONS = [
  { 
    id: "ctaA", 
    text: "Say hello", 
    color: "#F7DC6F", 
    textColor: "#1A1A1A",
    fontSize: "clamp(32px, 3.5vw, 56px)",
    width: 407, 
    height: 170, 
    type: "rectangle" as const 
  },
  { 
    id: "ctaB", 
    text: "Reach out", 
    color: "#E8F8F5", 
    textColor: "#1A1A1A",
    fontSize: "clamp(32px, 3.5vw, 56px)",
    width: 549, 
    height: 170, 
    type: "rectangle" as const 
  },
  { 
    id: "ctaC", 
    text: "Send a message", 
    color: "#F8BBD0", 
    textColor: "#1A1A1A",
    fontSize: "clamp(28px, 3vw, 52px)",
    width: 800, 
    height: 170, 
    type: "rectangle" as const 
  },
  { 
    id: "ctaD", 
    text: "Let's chat", 
    color: "#B71C1C", 
    textColor: "#FFFFFF",
    fontSize: "clamp(32px, 3.5vw, 56px)",
    width: 507, 
    height: 170, 
    type: "rectangle" as const 
  },
  { 
    id: "ctaE", 
    text: "📧", 
    color: "#81D4FA", 
    textColor: "#1A1A1A",
    fontSize: "72px",
    radius: 115, 
    type: "circle" as const 
  },
  { 
    id: "ctaF", 
    text: "💬", 
    color: "#F4E4C1", 
    textColor: "#1A1A1A",
    fontSize: "72px",
    radius: 115, 
    type: "circle" as const 
  },
];

export default function PhysicsContactButtons({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const toggleModal = useContactModalStore((state) => state.toggleModal);
  const [buttonPositions, setButtonPositions] = useState<
    Record<string, { x: number; y: number; angle: number }>
  >({});

  useEffect(() => {
    if (!containerRef.current) return;

    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Mouse,
      MouseConstraint,
      Events,
    } = Matter;

    // Get container dimensions
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;

    // Create an engine
    const engine = Engine.create({
      gravity: {
        y: 1.5,
        scale: 0.001,
      },
    });

    // Create a renderer that uses the containerRef element
    const render = Render.create({
      element: containerRef.current,
      engine: engine,
      options: {
        width: containerWidth,
        height: containerHeight,
        background: "transparent",
        wireframes: false,
        pixelRatio: window.devicePixelRatio || 1,
      },
    });

    // Create the CTAs (not added initially)
    const ctaA = Bodies.rectangle(containerWidth * 0.2, -330, 407, 170, {
      friction: 0.3,
      frictionAir: 0.00001,
      restitution: 0.3,
      render: {
        fillStyle: "#F7DC6F",
      },
      chamfer: { radius: 85 },
      label: "ctaA",
    });

    const ctaB = Bodies.rectangle(containerWidth * 0.4, -400, 549, 170, {
      friction: 0.3,
      frictionAir: 0.00001,
      restitution: 0.3,
      render: {
        fillStyle: "#E8F8F5",
      },
      chamfer: { radius: 85 },
      label: "ctaB",
    });

    const ctaC = Bodies.rectangle(containerWidth * 0.6, -200, 800, 170, {
      friction: 0.3,
      frictionAir: 0.00001,
      restitution: 0.3,
      render: {
        fillStyle: "#F8BBD0",
      },
      chamfer: { radius: 85 },
      label: "ctaC",
    });

    const ctaD = Bodies.rectangle(containerWidth * 0.5, -250, 507, 170, {
      friction: 0.3,
      frictionAir: 0.00001,
      restitution: 0.3,
      render: {
        fillStyle: "#B71C1C",
      },
      chamfer: { radius: 85 },
      label: "ctaD",
    });

    const ctaE = Bodies.circle(containerWidth * 0.85, -260, 115, {
      friction: 0.3,
      frictionAir: 0.00001,
      restitution: 0.3,
      render: {
        fillStyle: "#81D4FA",
      },
      label: "ctaE",
    });

    const ctaF = Bodies.circle(containerWidth * 0.1, -150, 115, {
      friction: 0.3,
      frictionAir: 0.00001,
      restitution: 0.3,
      render: {
        fillStyle: "#F4E4C1",
      },
      label: "ctaF",
    });

    // Creates a mouse
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    // Create an array of all interactive bodies
    const interactiveBodies = [ctaA, ctaB, ctaC, ctaD, ctaE, ctaF];

    // Map bodies to their labels for easy lookup
    const bodyMap: Record<string, Matter.Body> = {
      ctaA,
      ctaB,
      ctaC,
      ctaD,
      ctaE,
      ctaF,
    };

    // Update text positions after each render
    Events.on(engine, "afterUpdate", () => {
      const positions: Record<string, { x: number; y: number; angle: number }> =
        {};
      Object.entries(bodyMap).forEach(([label, body]) => {
        positions[label] = {
          x: body.position.x,
          y: body.position.y,
          angle: body.angle,
        };
      });
      setButtonPositions(positions);
    });

    // Track click state
    let clickStartBody: Matter.Body | null = null;
    let clickStartTime = 0;
    let isDragging = false;

    // On mouse down, record the starting body and time
    Events.on(mouseConstraint, "mousedown", (event) => {
      const mousePosition = event.mouse.position;
      clickStartBody = Matter.Query.point(interactiveBodies, mousePosition)[0];
      clickStartTime = Date.now();
      isDragging = false;
    });

    // On mouse move while pressed, check if we're dragging
    Events.on(mouseConstraint, "mousemove", (event) => {
      const mousePosition = event.mouse.position;
      const hoveredBody = Matter.Query.point(
        interactiveBodies,
        mousePosition
      )[0];

      // Update cursor style
      if (hoveredBody) {
        render.canvas.style.cursor = "pointer";
      } else {
        render.canvas.style.cursor = "default";
      }

      // If mouse is down and has moved significantly, consider it a drag
      if (mouseConstraint.mouse.button === 0 && mouseConstraint.body) {
        isDragging = true;
      }
    });

    // On mouse up, check if it was a click or a drag
    Events.on(mouseConstraint, "mouseup", (event) => {
      const mousePosition = event.mouse.position;
      const releasedBody = Matter.Query.point(
        interactiveBodies,
        mousePosition
      )[0];
      const clickDuration = Date.now() - clickStartTime;

      // If it's the same body, wasn't dragging, and click was short, consider it a click
      if (
        releasedBody &&
        releasedBody === clickStartBody &&
        !isDragging &&
        clickDuration < 300
      ) {
        toggleModal();
      }

      // Reset tracking variables
      clickStartBody = null;
    });

    // Create bounds (walls, ceiling, ground) (not added initially)
    const wallThickness = 1;

    // Ground (bottom)
    const ground = Bodies.rectangle(
      containerWidth / 2,
      containerHeight - wallThickness / 2,
      containerWidth,
      wallThickness,
      { isStatic: true, render: { fillStyle: "transparent" } }
    );

    // Left wall
    const leftWall = Bodies.rectangle(
      wallThickness / 2,
      containerHeight / 2,
      wallThickness,
      containerHeight,
      { isStatic: true, render: { fillStyle: "transparent" } }
    );

    // Right wall
    const rightWall = Bodies.rectangle(
      containerWidth - wallThickness / 2,
      containerHeight / 2,
      wallThickness,
      containerHeight,
      { isStatic: true, render: { fillStyle: "transparent" } }
    );

    // Ceiling (not added initially)
    const ceiling = Bodies.rectangle(
      containerWidth / 2,
      wallThickness / 2,
      containerWidth,
      wallThickness,
      { isStatic: true, render: { fillStyle: "transparent" } }
    );

    // Create a flag to track if bodies have been added
    let bodiesAdded = false;

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 35%",
      onEnter: () => {
        // Only add bodies if they haven't been added yet
        if (!bodiesAdded) {
          // Add all bodies to the world
          Composite.add(engine.world, [
            ctaA,
            ctaB,
            ctaC,
            ctaD,
            ctaE,
            ctaF,
            mouseConstraint,
            ground,
            leftWall,
            rightWall,
          ]);

          setTimeout(() => {
            Composite.add(engine.world, ceiling);
          }, 2000);

          // Set flag to true so this only happens once
          bodiesAdded = true;

          // Optionally, kill the ScrollTrigger since we don't need it anymore
          scrollTrigger.kill();
        }
      },
    });

    // Render the scene
    Render.run(render);

    // Create runner
    const runner = Runner.create();

    // Run the engine
    Runner.run(runner, engine);

    // Handle Resize
    function handleResize(containerRef: React.RefObject<HTMLDivElement>) {
      // Set canvas size to new values
      render.canvas.width = containerRef.current.clientWidth;
      render.canvas.height = containerRef.current.clientHeight;

      // Reposition right wall
      Matter.Body.setPosition(
        rightWall,
        Matter.Vector.create(
          containerRef.current.clientWidth + wallThickness / 2,
          containerRef.current.clientHeight / 2
        )
      );
    }

    window.addEventListener("resize", () => handleResize(containerRef));

    // Cleanup function for useEffect
    return () => {
      // Remove all event listeners
      Events.off(mouseConstraint, "mousedown");
      Events.off(mouseConstraint, "mousemove");
      Events.off(mouseConstraint, "mouseup");
      Events.off(engine, "afterUpdate");

      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};

      scrollTrigger.kill();
    };
  }, [containerRef, toggleModal]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {BUTTONS.map((button) => {
        const pos = buttonPositions[button.id];
        if (!pos) return null;

        const isDarkText = button.textColor === "#1A1A1A";
        const textShadow = isDarkText
          ? "2px 2px 4px rgba(255, 255, 255, 0.3), 1px 1px 2px rgba(255, 255, 255, 0.5)"
          : "3px 3px 6px rgba(0, 0, 0, 0.4), 1px 1px 2px rgba(0, 0, 0, 0.6)";

        return (
          <div
            key={button.id}
            className="absolute pointer-events-none select-none"
            style={{
              left: `${pos.x}px`,
              top: `${pos.y}px`,
              transform: `translate(-50%, -50%) rotate(${pos.angle}rad)`,
              width: button.type === "rectangle" ? `${button.width}px` : `${button.radius! * 2}px`,
              height: button.type === "rectangle" ? `${button.height}px` : `${button.radius! * 2}px`,
            }}
          >
            <div 
              className="w-full h-full flex items-center justify-center font-black tracking-tight leading-none"
              style={{
                fontSize: button.fontSize,
                color: button.textColor,
                textShadow: textShadow,
                letterSpacing: "-0.02em",
              }}
            >
              {button.text}
            </div>
          </div>
        );
      })}
    </div>
  );
}
