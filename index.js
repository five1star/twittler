let tweeting = document.querySelector('.input_button');

function newTweet(){
  let list_item = document.querySelector('.tweet_box_item');
  let list_temp = list_item.cloneNode(true);
  let newTweet = document.querySelector('.input_textarea').value;
  let parent = document.querySelector('.tweet_box');
  parent.appendChild(list_temp);
}
  
tweeting.addEventListener('click',function(){
newTweet
});
tweeting.addEventListener('click',function(){
newTweet()
});
