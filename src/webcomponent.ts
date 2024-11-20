class Component extends HTMLElement{
    constructor(){
        super()
        const shadow = this.attachShadow({mode:'open'})
        shadow.innerHTML = `
                <slot></slot>
               <div>Hello World</div>
        `
    }
}

customElements.define('my-component', Component)