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
          <li class="nav-item"><a href="html/about.html">About</a></li>
          <li class="nav-item">
            <a href="">D&D Tools</a>
            <div class="sub-nav">
              <ul class="sub-nav-group">
              <li class=><a href="html/dndtools/dice.html">Dice</a></li>
                <li class=>
                  <a href="html/dndtools/encounters.html">Encounters</a>
                </li>
                <li class=>
                  <a href="html/dndtools/generators.html">Generators</a>
                </li>
                <li class=><a href="html/dndtools/npcs.html">NPCs</a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a href="">Traveller Tools</a>
            <div class="sub-nav">
              <ul class="sub-nav-group">
                <li>
                  <a href="html/travellertools/chargen.html"
                    >Character Generator</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item"><a href="html/sitemap.html">Site Map</a></li>
        </ul>
      </nav>
      </header>
    `;
  }
}

customElements.define("comp-header", Header);
