import React, { useEffect } from "react";
import Letterize from "letterizejs";
import "./styles.css";

const TextAnimationH2 = () => {
  useEffect(() => {
    const animation = new Letterize({
      targets: "#animated-text-h2 span",
    });

    if (animation.list) {
      console.log("Animation list exists:", animation.list);

      animation.list.forEach((elArray, index) => {
        if (Array.isArray(elArray)) {
          //console.log(`Element array at index ${index}:`, elArray);
          elArray.forEach((el, subIndex) => {
            //console.log(`Adding class to span at subIndex ${subIndex}:`, el);
            el.classList.add(`char-${index}-${subIndex}`);
          });
        } else {
         // console.log(`Single element at index ${index}:`, elArray);
          elArray.classList.add(`char-${index}`);
        }
      });
    } else {
      //console.log("Animation list is undefined.");
    }
  }, []);

  return (
    <div id="logo" className="run-animation-h2">
      <div id="animated-text-h2">
        {"DESIGN | EVENTS | CONSTRUCTION".split("").map((char, index) => {
          console.log("Rendering character:", char); // Log each character
          // If the character is a space, render an empty span
          return (
            <span key={index} className={char === " " ? "space" : ""}>
              {char === " " ? "\u00A0" : char} {/* Non-breaking space */}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default TextAnimationH2;
