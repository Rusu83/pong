var y1,y2,cx,cy,s1=0,s2=0,viteza=1.5,instr=0;
function setup() {
  createCanvas(1001,501);
  rect(0,0,1000,500)
  noStroke();
  fill(255);
  y1=height/2-75;
  y2=height/2-75;
  x=width/2-15;
  y=random(501);
  cx=random(2);
  cy=random(2);
}

function draw() {
if(instr!=1){
  background(50);
  fill(255);
  textSize(36);
  text("Player1:W/S",40,50);
  text("Player2:O/L",40,90);
  text("Apasa orice tasta sa incepeti...",40,130);
  if(keyIsPressed)
    instr=1;
}
else{
  background(25);
  textSize(50);
  if(s1<10)
    text(s1,width/2-30,45);
  else
    text(s1,width/2-55,45);
  text(":",width/2,45);
  text(s2,width/2+20,45);
  rect(1,y1,30,150);
  rect(970,y2,30,150);
  rect(x,y,30,30,50);
  if(cx==1)
    x=x+viteza;
  else
    x=x-viteza;
  if(cy==1)
    y=y+viteza;
  else
    y=y-viteza;
  if(x<31)
    if((y>y1-34)&&(y<y1+155)){cx=1;}
  else{s2++;x=width/2-15;y=random(501);viteza=1.5;}
  if(x>940)
      if((y>y2-34)&&(y<y2+155)){cx=0;}
      else{s1++;x=width/2-15;y=random(501);viteza=1.5;}
  if(y>470)
    cy=0;
  if(y<1)
    cy=1;
  if(keyIsDown(87)){
    y1=y1-20;
    if(y1<1)
      y1=1;}
  if(keyIsDown(83)){
    y1=y1+20;
    if(y1>350)
    y1=350;}
  if(keyIsDown(79)){
    y2=y2-20;
    if(y2<1)
      y2=1;}
  if(keyIsDown(76)){
    y2=y2+20;
    if(y2>350)
    y2=350;}
viteza=viteza+0.0083;}}