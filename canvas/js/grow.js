/*document.getElementById("sheizon") = "https://api.propublica.org/congress/v1/113/senate/members.json"*/

    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");

//recibe valores de algun lado (?)

    let tree = {htmlPreg: 6, cssPreg: 5, jsPreg: 7};

    let html = new Image();
//    let css = new Image();
  //  let js = new Image();
    html.src = "images/html.png";
  //  css.src = "images/css.png";
  //  js.src = "images/js.png";


    var numColumns = 8;
    var numRows = 1;

    var frameWidth = html.width / numColumns;;
    var frameHeight = html.height / numRows;;

    var row = 0;
    var column = 0;

    setInterval(function(){
        column++;
        if (column > numColumns - 1){
            column = 0;
        }

        ctx.clearRect((335,255,175,95), 250, html.width, html.height);
        ctx.drawImage(html, column*frameWidth, row*frameHeight, frameWidth, frameHeight, 335, 250, frameWidth, frameHeight);
        ctx.drawImage(html, column*frameWidth, row*frameHeight, frameWidth, frameHeight, 255, 250, frameWidth, frameHeight);
        ctx.drawImage(html, column*frameWidth, row*frameHeight, frameWidth, frameHeight, 175, 250, frameWidth, frameHeight);
        ctx.drawImage(html, column*frameWidth, row*frameHeight, frameWidth, frameHeight, 95, 250, frameWidth, frameHeight);
        ctx.drawImage(html, column*frameWidth, row*frameHeight, frameWidth, frameHeight, 15, 250, frameWidth, frameHeight);
  }, 500);

//  ctx.clearRect(325, 350, css.width, css.height);
//  ctx.drawImage(css, column*frameWidth, row*frameHeight, frameWidth, frameHeight, 325, 350, frameWidth, frameHeight);

//  ctx.clearRect(325, 450, js.width, js.height);
//  ctx.drawImage(js, column*frameWidth, row*frameHeight, frameWidth, frameHeight, 325, 450, frameWidth, frameHeight);

/*    if (tree.htmlPreg >= 2) {
      setInterval(function(){
        column++;
        if (column > numColumns - 1){
            column = 0;
        }
        ctx.drawImage(html, column*frameWidth, row*frameHeight, frameWidth, frameHeight, 325, 250, frameWidth, frameHeight);
        ctx.clearRect(325, 250, html.width, html.height);
      }, 500);

      if (tree.htmlPreg >= 4) {
        setInterval(function(){
          column++;
          ctx.drawImage(html, column*frameWidth, row*frameHeight, frameWidth, frameHeight, 325, 250, frameWidth, frameHeight);
          ctx.drawImage(html, column*frameWidth, row*frameHeight, frameWidth, frameHeight, 245, 250, frameWidth, frameHeight);
          ctx.clearRect(325, 250, html.width, html.height);
          ctx.clearRect(245, 250, html.width, html.height);
        }, 500);

        if (tree.htmlPreg >= 6) {
          html.onload = function() {
            ctx.drawImage(html,325,200)
            ctx.drawImage(html,245,200)
            ctx.drawImage(html,165,200)
          }

          if (tree.htmlPreg >= 8) {
            html.onload = function() {
              ctx.drawImage(html,325,200)
              ctx.drawImage(html,245,200)
              ctx.drawImage(html,165,200)
              ctx.drawImage(html,85,200)
            }
            if (tree.htmlPreg >= 10) {
              html.onload = function() {
                ctx.drawImage(html,325,200)
                ctx.drawImage(html,245,200)
                ctx.drawImage(html,165,200)
                ctx.drawImage(html,85,200)
                ctx.drawImage(html,5,200)
              }
            }
          }
        }
      }
    }
/*     if (tree.cssPreg >= 2) {
      css.onload = function() {
        ctx.drawImage(css,325,300)
      }
      if (tree.cssPreg >= 4) {
        css.onload = function() {
          ctx.drawImage(css,325,300)
          ctx.drawImage(css,245,300)
        }
        if (tree.cssPreg >= 6) {
          fruit.onload = function() {
            ctx.drawImage(css,325,300)
            ctx.drawImage(css,245,300)
            ctx.drawImage(css,165,300)
          }
          if (tree.cssPreg >= 8) {
            css.onload = function() {
              ctx.drawImage(css,325,300)
              ctx.drawImage(css,245,300)
              ctx.drawImage(css,165,300)
              ctx.drawImage(css,85,300)
            }
            if (tree.cssPreg == 10) {
              css.onload = function() {
                ctx.drawImage(css,325,300)
                ctx.drawImage(css,245,300)
                ctx.drawImage(css,165,300)
                ctx.drawImage(css,85,300)
                ctx.drawImage(css,5,300)
              }
            }
          }
        }
      }
    }if (tree.jsPreg >= 2) {
      js.onload = function() {
        ctx.drawImage(js,325,400)
      }
      if (tree.jsPreg >= 4) {
        js.onload = function() {
          ctx.drawImage(js,325,400)
          ctx.drawImage(js,245,400)
        }
        if (tree.jsPreg >= 6) {
          js.onload = function() {
            ctx.drawImage(js,325,400)
            ctx.drawImage(js,245,400)
            ctx.drawImage(js,165,400)
          }
          if (tree.jsPreg >= 8) {
            js.onload = function() {
              ctx.drawImage(js,325,400)
              ctx.drawImage(js,245,400)
              ctx.drawImage(js,165,400)
              ctx.drawImage(js,85,400)
            }
            if (tree.jsPreg == 10) {
              js.onload = function() {
                ctx.drawImage(js,300,400)
                ctx.drawImage(js,245,400)
                ctx.drawImage(js,165,400)
                ctx.drawImage(js,85,400)
                ctx.drawImage(js,5,400)
              }
            }
          }
        }
      }
    }
*/
