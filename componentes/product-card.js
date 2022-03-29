class productCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        return ["img", "img-model", "title", "price", "detail", "description"];
      }
      attributeChangedCallback(attr, oldVal, newVal) {
        if (attr === "img") {
          this.img = newVal;
        }
        if (attr === "img-model") {
          this.imgModel = newVal;
        }
        if (attr === "title") {
          this.title = newVal;
        }
        if (attr === "description") {
          this.description = newVal;
        }
        if (attr === "price") {
          this.price = newVal;
        }
        if (attr === "detail") {
            this.detail = newVal;
          }
      }
    getTemplate() {
      const template = document.createElement("template");
      template.innerHTML = `
        <section class="container-card">
            <div class="card-bg">
                <img src="${this.img}" alt="hero image">
            </div>
            <div class="container-body">
                <div class="card-body">
                    <div class="body-image">
                        <img src="${this.imgModel}" alt="image model">
                    </div>                
                    <div class="body-heading">
                        <h2>PRINCE ULTEGRA 11S</h2>
                        <small>POSITIVE AND PURE EMOTION</small>
                    </div>
                    <div class="body-description">
                        <p>The result is a bicycle with technical characteristics and performance standards that outperform many high end Road bikes on the market today, and the reason that the PRINCE  is a real alternative to DOGMA F12</p>
                    </div>
                    <div class="body-btn">
                        <h3>€10.000 EU</h3>
                        <button>Buy now</button>
                    </div>
                </div>
            </div>            
        </section>
        ${this.getStyles()}
      `;
      return template;
    }
    getStyles() {
      return `
        <style>
        :host {
            --background-card: #fff;
            --background-card-img: #F4F4F4;
            --title-color: #000; 
            --text-color: #343a40;
            --button-bg-color: #fff;
            --button-bg-color-hover: #000;
            --button-color-text: #000;
            --button-color-text-hover: #fff;
            --button-border: #000;
            width: 100%;
            min-width: 320px;
        }
        .container-card {
            display: flex;
            flex-direction: column;
            padding: 0 16px;
        }
        /* background */
        .container-card .card-bg{
            display: none;
            width: 100%;
            min-width: 320px;
        }

        .container-card .card-bg img{
            width: 100%;
        }
        /* card */    
        .container-card .card-body{
            background-color: var(--background-card);
            margin: 16px 0;
        } 
        .container-card .card-body .body-image{
            background-color: var(--background-card-img);
        }   
        .container-card .card-body .body-image img{
            width: 100%;
        }
        .container-card .card-body .body-heading{
            color: var(--title-color);
            padding: 0 24px;
        }
        .container-card .card-body .body-heading h2{
            font-family: TT Norms;
            font-weight: bold;
            font-size: 1.125rem;
            line-height: 1.25rem;
            letter-spacing: 0.05em;
            margin: 16px auto 0;
        }
        .container-card .card-body .body-heading small{
            font-family: TT Norms;
            font-weight: lighter
        }
        .container-card .card-body .body-description{
            padding: 0 24px;
        }
        .container-card .card-body .body-description p{
            font-family: TT Norms;
            font-weight: 300;
            font-size: 1rem;
            line-height: 1.125rem;
            color: var(--text-color);
        }
        .container-card .card-body .body-btn{
            display: flex;
            justify-content: space-between;
            padding: 0 24px 16px;
        }
        .container-card .card-body .body-btn h3{
            font-family: TT Norms;
            font-size: 1rem;
            line-height: 1.125rem;
        }
        .container-card .card-body .body-btn button{
            font-family: TT Norms;
            font-size: 1rem;
            line-height: 1.125rem;
            color: var(--button-color-text);
            background-color: var(--button-bg-color);
            border: 1px solid var(--button-border);
            padding: 0 16px;
            cursor: pointer;
        }

        @media (min-width: 1024px){
            .container-card{
                flex-direction: row;
                padding: 0 24px 0 0;
            }
            .container-card .card-bg{
                display: flex;
                align-items: center;
                width: 50%;
            }
            .container-card .container-body{
                width: 50%;
            }
            .container-card .card-body{
                width: 100%;
            }
        }

        @media (min-width: 1200px){
            .container-card .card-bg{
                width: 60%;
                height: 100vh;
                justify-content: center;
            }
            .container-card .card-bg img{
                width: 77%;
            }
            .container-card .container-body{
                width: 40%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .container-card .container-body .card-body{
                width: 80%;
                margin: 0;
            }
        }
        </style>
      `;
    }
    render() {
      this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
      this.render();
    }
  }
  customElements.define("product-card", productCard);
  