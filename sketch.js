var largurabutton=330, alturabutton=50, xbutton=150, ybutton=90,xbutton2=150, ybutton2=150, xbutton3=150, ybutton3=210 ; 
var xrect =350, yrect=340;
var x=200, y=350;
var xeli=570, yeli=365
var raiocarx=30, raioeli=12
var x1=300, x2=1500,x3=2700, x4=3900, x5=5100, x6=6300, x7=7500, x8=8700, y4=200;
var x11=900, x22=2100,x33=3300, x44=4500, x55=5700, x66=6900, x77=8100, x88=9300
var speed=7;
var vidas=3;
var pontos=0, nivel=1, barreiradepontos=20000; 
var W, S, A, D;
var xobj = [], yobj = [], qtobj = 5;
var seq=1, reg=1;
var cont=0;
var opcao=1;
var xrect_desafio=260,yrect_desafio=180;

let snd;

let img;
let imgrun = []
function preload() {
    soundFormats('mp3','ogg');
    snd  = loadSound('assets/snd.mp3')
    img1 = loadImage('assets/forest1.png');
    img2 = loadImage('assets/forest2.jpg');
    img3 = loadImage('assets/forest3.jpg');
    img4 = loadImage('assets/forest4.jpg');
    img5 = loadImage('assets/forest5.jpg');
    img6 = loadImage('assets/forest6.jpg');
    img7 = loadImage('assets/forest7.jpg'); 
    img8 = loadImage('assets/car1sf.png');
    img9 =  loadImage('assets/boneco.jpg');
    img10= loadImage('assets/car2sf.png');
    img11= loadImage('assets/perfil.png');
    img12= loadImage('assets/perfil2.jpeg');
  
    imgrun[0] = loadImage('assets/Run 1.png');
    imgrun[1] = loadImage('assets/Run 2.png');
    imgrun[2] = loadImage('assets/Run 3.png');
    imgrun[3] = loadImage('assets/Run 4.png');
    imgrun[4] = loadImage('assets/Run 5.png');
    imgrun[5] = loadImage('assets/Run 6.png');
    imgrun[6] = loadImage('assets/Run 7.png');
    imgrun[7] = loadImage('assets/Run 8.png');
  
}

function setup() {
 // initialy the game has not started
  mode=0 
  textSize(50)
  createCanvas(600, 400); 
  
  // snd.play();
  
}

   function keyPressed(){
     
     if(key=="ArrowLeft"&&xrect_desafio>200){
  xrect_desafio=xrect_desafio-70
    opcao=opcao-1
    
  }
  if(key==="ArrowRight"&&xrect_desafio<300){
    xrect_desafio=xrect_desafio+70
    opcao=opcao+1
  
  }
  if(key=="Enter"){
    mode=1
  } 
  if(key=="Escape"){
    mode=0
  }
    
}

function draw() {

  clear()
  
  if(mode==0){
  
           //BACKGROUND
    
  background("0,250, 0");
  image(img1, 300, 200, 600, 400);
  imageMode(CENTER);
    
           //QUADRADO 1 DO MENU
  if(mouseX > xbutton && mouseX < xbutton + largurabutton && mouseY > ybutton && mouseY <     ybutton + alturabutton){
  fill("#84817a")
  rect(xbutton, ybutton,largurabutton, alturabutton)
   if (mouseIsPressed) {
       mode=1
  } } 
       
  textSize(30)
  fill("#0be881")
  text("PLAY GAME", 230, 125)  
    
          //QUADRADO 2 DO MENU 
    
   if(mouseX > xbutton2 && mouseX < xbutton2 + largurabutton && mouseY > ybutton2 && mouseY     < ybutton2 + alturabutton){
  fill("#84817a")
  rect(xbutton2, ybutton2,largurabutton, alturabutton)
   if (mouseIsPressed) {
       mode=2
   } }
  textSize(30)
  fill("#0be881")
  text("INSTRUÇÕES", 215, 185)
    
         //QUADRADO 3 DO MENU
    
  if(mouseX > xbutton3 && mouseX < xbutton3 + largurabutton && mouseY >         ybutton3 && mouseY     < ybutton3 + alturabutton){
  fill("#84817a")
  rect(xbutton3, ybutton3,largurabutton, alturabutton)
      if (mouseIsPressed) {
        mode=4
  }}
  textSize(30)
  fill("#0be881")
  text("CRÉDITOS", 235, 245)
    
    
  } 
  
  
 else if(mode==1){
  
  
           //CENÁRIO

    image(img1, x1, y4, 600, 400);
    image(img1, x11, y4, 600, 400);
    image(img2, x2, y4, 600, 400);
    image(img2, x22, y4, 600, 400);
    image(img3, x3, y4, 600, 400);
    image(img3, x33, y4, 600, 400);
    image(img4, x4, y4, 600, 400);
    image(img4, x44, y4, 600, 400);
    image(img5, x5, y4, 600, 400);
    image(img5, x55, y4, 600, 400);
    image(img6, x6, y4, 600, 400);
    image(img6, x66, y4, 600, 400);
    image(img7, x7, y4, 600, 400);
    image(img7, x77, y4, 600, 400);
    image(img1, x8, y4, 600, 400);
    image(img1, x88, y4, 600, 400);
    image(img10, x, y, (2*raiocarx), 30);
    image(img8, 460, 305, 80, 40);
   
     //boneco
  // image(imgrun[cont],20,20, 90, 90);
  // cont++
    
   
 
  x1=x1-2
  x11=x11-2
  x2=x2-2
  x22=x22-2
  x3=x3-2
  x33=x33-2
  x4=x4-2
  x44=x44-2
  x5=x5-2
  x55=x55-2
  x6=x6-2
  x66=x66-2
  x7=x7-2
  x77=x77-2
  x8=x8-2
  x88=x88-2
    
  if(x88==300){   
   x1=300
   x11=900
   x2=1500
   x22=2100
   x3=2700
   x33=3300 
   x4=3900
   x44=4500
   x5=5100
   x55=5700 
   x6=6300 
   x66=6900
   x7=7500 
   x77=8100
   x8=8700
   x88=9300
  } 
   
             //ESTRUTURA DO OBJETO
   
  fill("#009432")
  ellipse(xeli, yeli, (2*raioeli), (2*raioeli));
  textSize(25)
   
  fill("")
  text(seq, xeli,yeli)

  xeli=xeli-3
  if(xeli==0){
  xeli=600
  seq=seq+reg
    yeli=Math.floor(random(310,400))
  }
  reg=nivel
   
   
  if(dist(xeli, yeli, x, y) < (raioeli + raiocarx)){
  mode=3
  }
   
            //BOTÃO BACK
   
  if(mouseX > 10 && mouseX < 10 + 80 && mouseY > 10 && mouseY < 10 + 25){
  fill("")
  rect(10, 10, 80, 25)
  if (mouseIsPressed) {
  mode=0
   }
  }
  textSize(20)
  fill("#0984e3")
  text("BACK", 25, 30)
   
          //TEXTOS GERAIS
  
  fill("#0984e3");
  textSize(20);
    //text('Vidas: '+vidas, 10, 30);
  text('Pontos: '+pontos, 250, 30);
  text('Nivel: '+nivel, 500, 30);
  pontos=pontos + 5
  if(pontos>barreiradepontos){
  nivel++;
  barreiradepontos=barreiradepontos + 20000
  }

          //COMANDOS DO TECLADO
  
  if(keyIsDown(RIGHT_ARROW) || A==68){
  if(x<=560){
    x=x+speed
  }}
  
  if(keyIsDown(LEFT_ARROW) || D==65){
  if(x>=35){
   x=x-speed
  }}
  if(keyIsDown(UP_ARROW) || W==87){
  if(y>=305){
   y=y-speed
  }}
  
  if(keyIsDown(DOWN_ARROW) || S==83){
  if(y<=380){
  y=y+speed
  }}
  
window.addEventListener('keyup', function(){W=0; A=0; S=0; D=0}, false);
    
  }

 if(mode==2){

            //BACKGROUND
  image(img1, 300, 200, 600, 400);
  imageMode(CENTER);
  textSize(30)
  fill("#0be881")
  text("INSTRUÇÕES", 205, 40) 
   
           // TEXTO DAS INFORMAÇÕES
   
  textSize(20)
  fill("#0be881")
  text("NESSE JOGO VOCÊ IRA EMBARCAR NUMA AVENTURA", 30, 80)
    
  fill("#0be881")
  text("DANDO A VOLTA AO MUNDO DE FORMA MAIS DIVERTIDA.", 30, 105)
    
  fill("#0be881")
  text("PEGUE SEU CARRO E VAMOS LÁ!!", 30, 130)
   
  fill("#0984e3")
  text("ESCOLARIDADE:", 30, 180)
  
  fill("#eb2f06")
  text("2º ANO DO ENSINO FUNDAMENTAL", 200, 180)
   
  fill("#0984e3")
  text("MATÉRIA:", 30, 205)
   
  fill("#eb2f06")
  text("MATEMÁTICA", 130, 205)
   
  fill("#0984e3")
  text("HABILIDADE:", 30, 230)
    
  fill("#eb2f06")
  text("CONSTRUIR SEQUÊNCIA DE NÚMEROS", 160, 230)
   
  fill("#eb2f06")
  text("NATURAIS EM ORDEM CRESCENTE OU DECRESCENTE", 30, 255)
   
          //BOTÃO BACK
  
  if(mouseX > 10 && mouseX < 10 + 80 && mouseY > 10 && mouseY < 10 + 25){
  fill('')
  rect(10,10,80,25)
  if(mouseIsPressed){
  mode=0
  } } 
  
  textSize(20)
  fill("#0984e3")
  text("BACK", 25, 30)
    
}
  
  if(mode==3){
 
        // BACKGROUND
  image(img7, 300, 200, 600, 400);
  imageMode(CENTER);
    
        // MENSAGEM
        
  textSize(40)
  fill("#0be881")
  text("GAME OVER", 180, 50)
  fill("#0be881")
  textSize(30)
  text("PRÓXIMO NUMERO É??", 140, 110)
    
        //RESPOSTA
  
  fill("#fed330")
 // rect(190,180,60,40) 
  rect(xrect_desafio,yrect_desafio,60,40)
//  rect(330,180,60,40)
   
   
  textSize(30)
  fill("#0be881")
  text(seq -reg,200,210)
  text(seq +reg,270,210)
  text(seq -2,340,210)
  
    
        // BOTÃO PLAY AGAING
  
  if(mouseX > xrect && mouseX < xrect + 240 && mouseY > yrect && mouseY < yrect +     50){
  fill("#0fb9b1")
  rect(xrect,yrect,240,50)
  if(mouseIsPressed){
  mode=1
  } } 
  textSize(30)
  fill("#f6b93b")
  text("PLAY AGAIN", 385, 375)
  
  }
  
   if(mode==4){
     
     //BACKGROUND
     
  background("0,250, 0");
  image(img1, 300, 200, 600, 400);
  imageMode(CENTER);
     
     //imagens do perfil
     
  image(img11, 100, 100, 70, 80);
  image(img12, 100, 200, 80, 90);
      
     //TEXTO
  
  textSize(30)
  fill("#0be881")
  text("CRÉDITOS", 230, 40)
  
   textSize(20)
  fill("#0be881")
  text("BRENDHA FARIAS NOGUEIRA:", 170, 100)
  
   textSize(20)
  fill("#eb2f06")
  text("PROGRAMADORA", 225, 130)
  
    textSize(20)
  fill("#0be881")
  text("FÁBIO NOGUEIRA DA SILVA:", 170, 200)
  
    textSize(20)
  fill("#eb2f06")
  text("EDUCADOR", 225, 230)
  
  
     //BOTÃO BACK
     
   if(mouseX > 10 && mouseX < 10 + 80 && mouseY > 10 && mouseY < 10 + 25){
  fill('')
  rect(10,10,80,25)
  if(mouseIsPressed){
  mode=0
  } } 
  
    textSize(20)
  fill("#0984e3")
  text("BACK", 25, 30)
    
  
  
  }
  
  
  
}
