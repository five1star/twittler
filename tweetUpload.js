let tweeting = document.querySelector('.input_button');



function newTweet(){
  let newTweet = document.querySelector('.input_textarea').value;
  if(newTweet !==''){  

  let list_item = document.querySelector('.tweet_box_item').cloneNode(true);
  let parent = document.querySelector('.tweet_box');
  parent.appendChild(list_item);
  
  let tweets = document.querySelectorAll('.tweet_text')
  let last_tweets = tweets[tweets.length-1]
  last_tweets.textContent = newTweet;
  return;
  }
  alert('트윗을 남겨주세요!');
}
 

tweeting.addEventListener('click',function(){
newTweet()
});

