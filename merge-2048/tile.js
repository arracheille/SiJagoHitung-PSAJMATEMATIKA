export default class Tile {
  #tileElement;
  #x;
  #y;
  #value;
  constructor(tileContainer, value = Math.random() > 0.5 ? 2 : 4) {
    this.#tileElement = document.createElement("div");
    this.#tileElement.classList.add("tile");
    tileContainer.append(this.#tileElement);
    this.value = value;
  }
  get value() {
    return this.#value;
  }
  set value(v) {
    this.#value = v;
    this.#tileElement.textContent = v;

    // Set background color based on tile value
    const backgroundColor = `var(--tile-${v}-bg)`;
    const textColor = "var(--tile-text-light)"; // Menggunakan warna teks hitam

    this.#tileElement.style.backgroundColor = backgroundColor;
    this.#tileElement.style.color = textColor;
  }

  set x(value) {
    this.#x = value;
    this.#tileElement.style.setProperty("--x", value);
  }
  set y(value) {
    this.#y = value;
    this.#tileElement.style.setProperty("--y", value);
  }
  remove() {
    this.#tileElement.remove();
  }
  waitForTransition(animation = false) {
    return new Promise((resolve) => {
      this.#tileElement.addEventListener(
        animation ? "animationend" : "transitionend",
        resolve,
        {
          once: true,
        }
      );
    });
  }
}
