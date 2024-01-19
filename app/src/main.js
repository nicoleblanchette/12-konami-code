import { cornify_add } from "./cornify";

const pressed = [];
const secretCode = 'rafflesia'; // It's the world's largest flower! It's parasitic and has no leaves, roots, or stems

document.body.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    cornify_add();
  }
});
