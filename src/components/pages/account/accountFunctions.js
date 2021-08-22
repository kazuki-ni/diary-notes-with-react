const changeBg = () => {

  const bgImages = ["1.jpg","2.jpg","3.jpg","4.jpg"];
  let i = 0;
  const interval = 10000;

  const timer = setInterval( () => {
    i++;
    i%=bgImages.length;
    try {
      document.getElementById("sign-img").style.backgroundImage = `url(./images/accountPage/${i}.jpg)`;
    } catch {
      clearInterval(timer);
      console.log("Timer Stopped")
    }
  }, interval)

}

export {changeBg};