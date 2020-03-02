/*document.getElementById("sheizon") = "https://api.propublica.org/congress/v1/113/senate/members.json"*/

    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");

//recibe valores de algun lado (?)

    let tree = {htmlPreg: 9, cssPreg: 0, jsPreg: 0};

    let html = new Image();
    let css = new Image();
    let js = new Image();
    html.src = "images/html.png";
    css.src = "images/css.png";
    js.src = "images/js.png";

    var numColumns = 8;
    var numRows = 1;

    let frameWidth = html.width / numColumns;;
    let frameHeight = html.height / numRows;;
    let fW2 = css.width / numColumns;;
    let fH2 = css.height / numRows;;
    let fW3 = js.width / numColumns;;
    let fH3 = js.height / numRows;;

    var row = 0;
    var column = 0;

//HTML
    if (tree.htmlPreg <= 3) {
        setInterval(function(){
          column++;
          if (column > numColumns - 1){
              column = 0;
          }
          ctx.clearRect(295, 250, html.width, html.height);
          ctx.drawImage(html, column*frameWidth, row*frameHeight, frameWidth, frameHeight, 295, 250, frameWidth, frameHeight);
        }, 1000);
      }else if (tree.htmlPreg <= 5) {
          setInterval(function(){
            column++;
            if (column > numColumns - 1){
                column = 0;
            }
            ctx.clearRect((295,225), 250, html.width, html.height);
            ctx.drawImage(html, column*frameWidth, row*frameHeight, frameWidth, frameHeight, 295, 250, frameWidth, frameHeight);
            ctx.drawImage(html, column*frameWidth, row*frameHeight, frameWidth, frameHeight, 225, 250, frameWidth, frameHeight);
          }, 1000);
        }else if (tree.htmlPreg <= 7) {
            setInterval(function(){
              column++;
              if (column > numColumns - 1){
                  column = 0;
              }
              ctx.clearRect((295,225,155), 250, html.width, html.height);
              ctx.drawImage(html, column*frameWidth, row*frameHeight, frameWidth, frameHeight, 295, 250, frameWidth, frameHeight);
              ctx.drawImage(html, column*frameWidth, row*frameHeight, frameWidth, frameHeight, 225, 250, frameWidth, frameHeight);
              ctx.drawImage(html, column*frameWidth, row*frameHeight, frameWidth, frameHeight, 155, 250, frameWidth, frameHeight);
            }, 1000);
          }else if (tree.htmlPreg <= 9) {
              setInterval(function(){
                column++;
                if (column > numColumns - 1){
                    column = 0;
                }
                ctx.clearRect((295,225,155,85), 250, html.width, html.height);
                ctx.drawImage(html, column*frameWidth, row*frameHeight, frameWidth, frameHeight, 295, 250, frameWidth, frameHeight);
                ctx.drawImage(html, column*frameWidth, row*frameHeight, frameWidth, frameHeight, 225, 250, frameWidth, frameHeight);
                ctx.drawImage(html, column*frameWidth, row*frameHeight, frameWidth, frameHeight, 155, 250, frameWidth, frameHeight);
                ctx.drawImage(html, column*frameWidth, row*frameHeight, frameWidth, frameHeight, 85, 250, frameWidth, frameHeight);
              }, 1000);
            }else if (tree.htmlPreg == 10) {
                setInterval(function(){
                  column++;
                  if (column > numColumns - 1){
                      column = 0;
                  }
                  ctx.clearRect((295,225,155,85,15), 250, html.width, html.height);
                  ctx.drawImage(html, column*frameWidth, row*frameHeight, frameWidth, frameHeight, 295, 250, frameWidth, frameHeight);
                  ctx.drawImage(html, column*frameWidth, row*frameHeight, frameWidth, frameHeight, 225, 250, frameWidth, frameHeight);
                  ctx.drawImage(html, column*frameWidth, row*frameHeight, frameWidth, frameHeight, 155, 250, frameWidth, frameHeight);
                  ctx.drawImage(html, column*frameWidth, row*frameHeight, frameWidth, frameHeight, 85, 250, frameWidth, frameHeight);
                  ctx.drawImage(html, column*frameWidth, row*frameHeight, frameWidth, frameHeight, 15, 250, frameWidth, frameHeight);
                }, 1000);
              }
//CSS
    if (tree.cssPreg <= 3) {
        setInterval(function(){
          column++;
          if (column > numColumns - 1){
              column = 0;
          }
          ctx.clearRect(295, 250, css.width, css.height);
          ctx.drawImage(css, column*fW2, row*fH2, fW2, fH2, 295, 350, fW2, fH2);
        }, 1000);
      }else if (tree.cssPreg <= 5) {
          setInterval(function(){
            column++;
            if (column > numColumns - 1){
                column = 0;
            }
            ctx.clearRect((295,225), 350, css.width, css.height);
            ctx.drawImage(css, column*fW2, row*fH2, fW2, fH2, 295, 350, fW2, fH2);
            ctx.drawImage(css, column*fW2, row*fH2, fW2, fH2, 225, 350, fW2, fH2);
          }, 1000);
        }else if (tree.cssPreg <= 7) {
            setInterval(function(){
              column++;
              if (column > numColumns - 1){
                  column = 0;
              }
              ctx.clearRect((295,225,155), 350, css.width, css.height);
              ctx.drawImage(css, column*fW2, row*fH2, fW2, fH2, 295, 350, fW2, fH2);
              ctx.drawImage(css, column*fW2, row*fH2, fW2, fH2, 225, 350, fW2, fH2);
              ctx.drawImage(css, column*fW2, row*fH2, fW2, fH2, 155, 350, fW2, fH2);
            }, 1000);
          }else if (tree.cssPreg <= 9) {
              setInterval(function(){
                column++;
                if (column > numColumns - 1){
                    column = 0;
                }
                ctx.clearRect((295,225,155,85), 350, css.width, css.height);
                ctx.drawImage(html, column*fW2, row*fH2, fW2, fH2, 295, 350, fW2, fH2);
                ctx.drawImage(html, column*fW2, row*fH2, fW2, fH2, 225, 350, fW2, fH2);
                ctx.drawImage(html, column*fW2, row*fH2, fW2, fH2, 155, 350, fW2, fH2);
                ctx.drawImage(html, column*fW2, row*fH2, fW2, fH2, 85, 350, fW2, fH2);
              }, 1000);
            }else if (tree.cssPreg == 10) {
                setInterval(function(){
                  column++;
                  if (column > numColumns - 1){
                      column = 0;
                  }
                  ctx.clearRect((295,225,155,85,15), 350, css.width, css.height);
                  ctx.drawImage(css, column*fW2, row*fH2, fW2, fH2, 295, 350, fW2, fH2);
                  ctx.drawImage(css, column*fW2, row*fH2, fW2, fH2, 225, 350, fW2, fH2);
                  ctx.drawImage(css, column*fW2, row*fH2, fW2, fH2, 155, 350, fW2, fH2);
                  ctx.drawImage(css, column*fW2, row*fH2, fW2, fH2, 85, 350, fW2, fH2);
                  ctx.drawImage(css, column*fW2, row*fH2, fW2, fH2, 15, 350, fW2, fH2);
                }, 1000);
              }
//JS
    if (tree.jsPreg <= 3) {
        setInterval(function(){
          column++;
          if (column > numColumns - 1){
              column = 0;
          }
          ctx.clearRect(295, 450, js.width, js.height);
          ctx.drawImage(js, column*fW3, row*fH3, fW3, fH3, 295, 450, fW3, fH3);
        }, 1000);
      }else if (tree.jsPreg <= 5) {
          setInterval(function(){
            column++;
            if (column > numColumns - 1){
              column = 0;
            }
            ctx.clearRect((295,225), 450, js.width, js.height);
            ctx.drawImage(js, column*fW3, row*fH3, fW3, fH3, 295, 450, fW3, fH3);
            ctx.drawImage(js, column*fW3, row*fH3, fW3, fH3, 225, 450, fW3, fH3);
          }, 1000);
        }else if (tree.htmlPreg <= 7) {
            setInterval(function(){
              column++;
              if (column > numColumns - 1){
                  column = 0;
              }
              ctx.clearRect((295,225,155), 450, js.width, js.height);
              ctx.drawImage(js, column*fW3, row*fH3, fW3, fH3, 295, 450, fW3, fH3);
              ctx.drawImage(js, column*fW3, row*fH3, fW3, fH3, 225, 450, fW3, fH3);
              ctx.drawImage(js, column*fW3, row*fH3, fW3, fH3, 155, 450, fW3, fH3);
            }, 1000);
          }else if (tree.htmlPreg <= 9) {
              setInterval(function(){
                column++;
                if (column > numColumns - 1){
                    column = 0;
                }
                ctx.clearRect((295,225,155,85), 450, js.width, js.height);
                html.onload = function(){
                ctx.drawImage(js, column*fW3, row*fH3, fW3, fH3, 295, 450, fW3, fH3);
                ctx.drawImage(js, column*fW3, row*fH3, fW3, fH3, 225, 450, fW3, fH3);
                ctx.drawImage(js, column*fW3, row*fH3, fW3, fH3, 155, 450, fW3, fH3);
                ctx.drawImage(js, column*fW3, row*fH3, fW3, fH3, 85, 450, fW3, fH3);
              }}, 1000);
            }else if (tree.htmlPreg == 10) {
                setInterval(function(){
                  column++;
                  if (column > numColumns - 1){
                      column = 0;
                  }
                  ctx.clearRect((295,225,155,85,15), 450, js.width, js.height);
                  ctx.drawImage(js, column*fW3, row*fH3, fW3, fH3, 295, 450, fW3, fH3);
                  ctx.drawImage(js, column*fW3, row*fH3, fW3, fH3, 225, 450, fW3, fH3);
                  ctx.drawImage(js, column*fW3, row*fH3, fW3, fH3, 155, 450, fW3, fH3);
                  ctx.drawImage(js, column*fW3, row*fH3, fW3, fH3, 85, 450, fW3, fH3);
                  ctx.drawImage(js, column*fW3, row*fH3, fW3, fH3, 15, 450, fW3, fH3);
                }, 1000);
              }
