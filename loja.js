


const items = [
    
    { 
        id: 0,
        nome: 'Apple Watch Series 4  |R$399|',
        img:'Imagem/apple-watch.svg',
        preço:'R$399',
        quantidade: 0
    },
    


    {
        id: 1,
        nome: 'JBL-speaker  |R$199|',
        img:'Imagem/jbl-speaker.svg',
        preço:'|R$199|',
        quantidade: 0

    },


    {
        id: 2,
        nome: 'Apple iPhone x 128GB  |R$899|',
        img:'Imagem/iphone-x.svg',
        preço:'R$899',
        quantidade: 0
        

    },


    {
        id: 3,
        nome: 'Beats-headphones |R$459|',
        img:'Imagem/beats-headphones.svg',
        preço:'459',
        quantidade: 0

    },


    {
        id: 4,
        nome: 'Apple Macbook Pro |R$2.499|',
        img:'Imagem/macbook-pro.svg',
        preço:'R$2.499',
        quantidade: 0

    },


    {
        id: 5,
        nome: 'Apple iPad Pro 64GB |R$899|',
        img:'Imagem/ipad-pro.svg',
        preço:'R$899',
        quantidade: 0

    },


    {
        id: 6,
        nome: 'Apple Homepod |R$399|',
        img:'Imagem/homepod.svg',
        preço:'R$399',
        quantidade: 0

    },


    {
        id: 7,
        nome: 'JBuds Air Wireless  |R$249|',
        img:'Imagem/jlab-audio-wireless.svg',
        preço:'R$249',
        quantidade: 0

    },
]

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";

      this.handleClick = this.handleClick.bind(this);
      
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
      var links = document.getElementsByTagName('a');

      

for (var i=0;i < links.length; i++){
    links[i].addEventListener("click",function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
    })

    
}

    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
        
      }
      return this;
    }
  }

  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );

  mobileNavbar.init(); 

  
  inicializarLoja = () => {

    var containerProdutos = document.getElementById('produtos');
    items.map((val) => {
      containerProdutos.innerHTML += `
 
     
             <div class="produto-single">
                 <img src="`+val.img+`"/> 
                 <p> `+val.nome+`<p/>
                 <a key="`+val.id+`" href="#">Adicionar ao carrinho<a/>
             <div/>     
       
 
             <div id="produtos"> 
             
             </div>
     `;
     
 })
 
 }
 
 
 inicializarLoja = () => {

  var containerProdutos = document.getElementById('produtos');
  items.map((val) => {
    containerProdutos.innerHTML += `

   
           <div class="produto-single">
               <img src="`+val.img+`"/> 
               <p> `+val.nome+`<p/>
               <a key="`+val.id+`" href="#">Adicionar ao carrinho<a/>
           <div/>     
     

           <div id="produtos"> 
           
           </div>
   `;
   
})

}


inicializarLoja();

atualizarCarrinho = () =>{
   var containerCarrinho = document.getElementById('carrinho');
   containerCarrinho.innerHTML = "";
  items.map((val) => {
     
    if(val.quantidade > 0){
    containerCarrinho.innerHTML += `
     <div class="info-single-checkout">
     <p style="float:left;">Produto: `+val.nome+`</p>
     <p style="float:right;">Quantidade:  `+val.quantidade+`</p>
     <div style="clear:both"></div>
      </div>
     
   `;

    }
})

}

var links = document.getElementsByTagName('a');

for (var i=0;i < links.length; i++){
   links[i].addEventListener("click",function(){
       let key = this.getAttribute('key');
       items[key].quantidade++;
       atualizarCarrinho();
       return false;
   })

   
}





