class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <ul>
          <li><a href="mailto:alexander.usman@gmail.com">email</a></li>
          <li>
            <a href="https://github.com/alexander-usman"
              >github.com/alexander-usman</a
            >
          </li>
        </ul>
      </footer>
    `;
  }
}

customElements.define("comp-footer", Footer);
