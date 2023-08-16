class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
      <nav
        role="navigation"
        aria-label="Main Menu"
        tabindex="-1"
      >
        <ul class="nav-menu">
          <li class="nav-item"><a href="/">Home</a></li>
          <li class="nav-item"><a href="/html/about">About</a></li>
          <li class="nav-item">
            <a href="">D&D Tools</a>
            <div class="sub-nav">
              <ul class="sub-nav-group">
              <li class=><a href="/html/dndtools/dice">Dice</a></li>
                <li class=>
                  <a href="/html/dndtools/encounters">Encounters</a>
                </li>
                <li class=>
                  <a href="/html/dndtools/generators">Generators</a>
                </li>
                <li class=><a href="/html/dndtools/npcs">NPCs</a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a href="">Traveller Tools</a>
            <div class="sub-nav">
              <ul class="sub-nav-group">
                <li>
                  <a href="/html/dndtools/travellertools/chargen"
                    >Character Generator</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item"><a href="/html/sitemap">Site Map</a></li>
        </ul>
      </nav>
      </header>
    `;
  }
}

customElements.define("comp-header", Header);
