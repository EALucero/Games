/*document.getElementById("sheizon") = "https://api.propublica.org/congress/v1/113/senate/members.json"*/

    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");

//recibe valores de algun lado (?)

    let tree = {htmlPreg: 6, cssPreg: 9, jsPreg: 10};

    let html = new Image();
    let css = new Image();
    let js = new Image();
    html.src = "images/html.png";
    css.src = "images/css.png";
    js.src = "images/js.png";

    let nC1 = 8;
    let nR1 = 1;
    let nC2 = 8;
    let nR2 = 1;
    let nC3 = 8;
    let nR3 = 1;

    let frameWidth = html.width / nC1;;
    let frameHeight = html.height / nR1;;
    let fW2 = css.width / nC2;;
    let fH2 = css.height / nR2;;
    let fW3 = js.width / nC3;;
    let fH3 = js.height / nR3;;

    let r1 = 0;
    let c1 = 0;
    let r2 = 0;
    let c2 = 0;
    let r3 = 0;
    let c3 = 0;

//HTML
    if (tree.htmlPreg >= 2 && tree.htmlPreg <= 3) {
        setInterval(function(){
          c1++;
          if (c1 > nC1 - 1){
              c1 = 0;
          }
          ctx.clearRect(295, 250, html.width, html.height);
          ctx.drawImage(html, c1*frameWidth, r1*frameHeight, frameWidth, frameHeight, 295, 250, frameWidth, frameHeight);
        }, 500);
      }else if (tree.htmlPreg >= 4 && tree.htmlPreg <= 5) {
          setInterval(function(){
            c1++;
            if (c1 > nC1 - 1){
                c1 = 0;
            }
            ctx.clearRect((295,225), 250, html.width, html.height);
            ctx.drawImage(html, c1*frameWidth, r1*frameHeight, frameWidth, frameHeight, 295, 250, frameWidth, frameHeight);
            ctx.drawImage(html, c1*frameWidth, r1*frameHeight, frameWidth, frameHeight, 225, 250, frameWidth, frameHeight);
          }, 500);
        }else if (tree.htmlPreg >= 6 && tree.htmlPreg <= 7) {
            setInterval(function(){
              c1++;
              if (c1 > nC1 - 1){
                  c1 = 0;
              }
              ctx.clearRect((295,225,155), 250, html.width, html.height);
              ctx.drawImage(html, c1*frameWidth, r1*frameHeight, frameWidth, frameHeight, 295, 250, frameWidth, frameHeight);
              ctx.drawImage(html, c1*frameWidth, r1*frameHeight, frameWidth, frameHeight, 225, 250, frameWidth, frameHeight);
              ctx.drawImage(html, c1*frameWidth, r1*frameHeight, frameWidth, frameHeight, 155, 250, frameWidth, frameHeight);
            }, 500);
          }else if (tree.htmlPreg >= 8 && tree.htmlPreg <= 9) {
              setInterval(function(){
                c1++;
                if (c1 > nC1 - 1){
                    c1 = 0;
                }
                ctx.clearRect((295,225,155,85), 250, html.width, html.height);
                ctx.drawImage(html, c1*frameWidth, r1*frameHeight, frameWidth, frameHeight, 295, 250, frameWidth, frameHeight);
                ctx.drawImage(html, c1*frameWidth, r1*frameHeight, frameWidth, frameHeight, 225, 250, frameWidth, frameHeight);
                ctx.drawImage(html, c1*frameWidth, r1*frameHeight, frameWidth, frameHeight, 155, 250, frameWidth, frameHeight);
                ctx.drawImage(html, c1*frameWidth, r1*frameHeight, frameWidth, frameHeight, 85, 250, frameWidth, frameHeight);
              }, 500);
            }else if (tree.htmlPreg == 10) {
                setInterval(function(){
                  c1++;
                  if (c1 > nC1 - 1){
                      c1 = 0;
                  }
                  ctx.clearRect((295,225,155,85,15), 250, html.width, html.height);
                  ctx.drawImage(html, c1*frameWidth, r1*frameHeight, frameWidth, frameHeight, 295, 250, frameWidth, frameHeight);
                  ctx.drawImage(html, c1*frameWidth, r1*frameHeight, frameWidth, frameHeight, 225, 250, frameWidth, frameHeight);
                  ctx.drawImage(html, c1*frameWidth, r1*frameHeight, frameWidth, frameHeight, 155, 250, frameWidth, frameHeight);
                  ctx.drawImage(html, c1*frameWidth, r1*frameHeight, frameWidth, frameHeight, 85, 250, frameWidth, frameHeight);
                  ctx.drawImage(html, c1*frameWidth, r1*frameHeight, frameWidth, frameHeight, 15, 250, frameWidth, frameHeight);
                }, 500);
              }
//CSS
    if (tree.cssPreg >= 2 && tree.cssPreg <= 3) {
        setInterval(function(){
          c2++;
          if (c2 > nC2 - 1){
              c2 = 0;
          }
          ctx.clearRect(295, 350, css.width, css.height);
          ctx.drawImage(css, c2*fW2, r2*fH2, fW2, fH2, 295, 350, fW2, fH2);
        }, 500);
      }else if (tree.cssPreg >= 4 && tree.cssPreg <= 5) {
          setInterval(function(){
            c2++;
            if (c2 > nC2 - 1){
                c2 = 0;
            }
            ctx.clearRect((295,225), 350, css.width, css.height);
            ctx.drawImage(css, c2*fW2, r2*fH2, fW2, fH2, 295, 350, fW2, fH2);
            ctx.drawImage(css, c2*fW2, r2*fH2, fW2, fH2, 225, 350, fW2, fH2);
          }, 500);
        }else if (tree.cssPreg >= 6 && tree.cssPreg <= 7) {
            setInterval(function(){
              c2++;
              if (c2 > nC2 - 1){
                  c2 = 0;
              }
              ctx.clearRect((295,225,155), 350, css.width, css.height);
              ctx.drawImage(css, c2*fW2, r2*fH2, fW2, fH2, 295, 350, fW2, fH2);
              ctx.drawImage(css, c2*fW2, r2*fH2, fW2, fH2, 225, 350, fW2, fH2);
              ctx.drawImage(css, c2*fW2, r2*fH2, fW2, fH2, 155, 350, fW2, fH2);
            }, 500);
          }else if (tree.cssPreg >= 8 && tree.cssPreg <= 9) {
              setInterval(function(){
                c2++;
                if (c2 > nC2 - 1){
                    c2 = 0;
                }
                ctx.clearRect((295,225,155,85), 350, css.width, css.height);
                ctx.drawImage(html, c2*fW2, r2*fH2, fW2, fH2, 295, 350, fW2, fH2);
                ctx.drawImage(html, c2*fW2, r2*fH2, fW2, fH2, 225, 350, fW2, fH2);
                ctx.drawImage(html, c2*fW2, r2*fH2, fW2, fH2, 155, 350, fW2, fH2);
                ctx.drawImage(html, c2*fW2, r2*fH2, fW2, fH2, 85, 350, fW2, fH2);
              }, 500);
            }else if (tree.cssPreg == 10) {
                setInterval(function(){
                  c2++;
                  if (c2 > nC2 - 1){
                      c2 = 0;
                  }
                  ctx.clearRect((295,225,155,85,15), 350, css.width, css.height);
                  ctx.drawImage(css, c2*fW2, r2*fH2, fW2, fH2, 295, 350, fW2, fH2);
                  ctx.drawImage(css, c2*fW2, r2*fH2, fW2, fH2, 225, 350, fW2, fH2);
                  ctx.drawImage(css, c2*fW2, r2*fH2, fW2, fH2, 155, 350, fW2, fH2);
                  ctx.drawImage(css, c2*fW2, r2*fH2, fW2, fH2, 85, 350, fW2, fH2);
                  ctx.drawImage(css, c2*fW2, r2*fH2, fW2, fH2, 15, 350, fW2, fH2);
                }, 500);
              }
//JS
    if (tree.jsPreg >= 2 && tree.jsPreg <= 3) {
        setInterval(function(){
          c3++;
          if (c3 > nC3 - 1){
              c3 = 0;
          }
          ctx.clearRect(295, 450, js.width, js.height);
          ctx.drawImage(js, c3*fW3, r3*fH3, fW3, fH3, 295, 450, fW3, fH3);
        }, 500);
      }else if (tree.jsPreg >= 4 && tree.jsPreg <= 5) {
          setInterval(function(){
            c3++;
            if (c3 > nC3 - 1){
              c3 = 0;
            }
            ctx.clearRect((295,225), 450, js.width, js.height);
            ctx.drawImage(js, c3*fW3, r3*fH3, fW3, fH3, 295, 450, fW3, fH3);
            ctx.drawImage(js, c3*fW3, r3*fH3, fW3, fH3, 225, 450, fW3, fH3);
          }, 500);
        }else if (tree.jsPreg >= 6 && tree.jsPreg <= 7) {
            setInterval(function(){
              c3++;
              if (c3 > nC3 - 1){
                  c3 = 0;
              }
              ctx.clearRect((295,225,155), 450, js.width, js.height);
              ctx.drawImage(js, c3*fW3, r3*fH3, fW3, fH3, 295, 450, fW3, fH3);
              ctx.drawImage(js, c3*fW3, r3*fH3, fW3, fH3, 225, 450, fW3, fH3);
              ctx.drawImage(js, c3*fW3, r3*fH3, fW3, fH3, 155, 450, fW3, fH3);
            }, 500);
          }else if (tree.jsPreg >= 8 && tree.jsPreg <= 9) {
              setInterval(function(){
                c3++;
                if (c3 > nC3 - 1){
                    c3 = 0;
                }
                ctx.clearRect((295,225,155,85), 450, js.width, js.height);
                ctx.drawImage(js, c3*fW3, r3*fH3, fW3, fH3, 295, 450, fW3, fH3);
                ctx.drawImage(js, c3*fW3, r3*fH3, fW3, fH3, 225, 450, fW3, fH3);
                ctx.drawImage(js, c3*fW3, r3*fH3, fW3, fH3, 155, 450, fW3, fH3);
                ctx.drawImage(js, c3*fW3, r3*fH3, fW3, fH3, 85, 450, fW3, fH3);
              }, 500);
            }else if (tree.jsPreg == 10) {
                setInterval(function(){
                  c3++;
                  if (c3 > nC3 - 1){
                      c3 = 0;
                  }
                  ctx.clearRect((295,225,155,85,15), 450, js.width, js.height);
                  ctx.drawImage(js, c3*fW3, r3*fH3, fW3, fH3, 295, 450, fW3, fH3);
                  ctx.drawImage(js, c3*fW3, r3*fH3, fW3, fH3, 225, 450, fW3, fH3);
                  ctx.drawImage(js, c3*fW3, r3*fH3, fW3, fH3, 155, 450, fW3, fH3);
                  ctx.drawImage(js, c3*fW3, r3*fH3, fW3, fH3, 85, 450, fW3, fH3);
                  ctx.drawImage(js, c3*fW3, r3*fH3, fW3, fH3, 15, 450, fW3, fH3);
                }, 500);
              }
