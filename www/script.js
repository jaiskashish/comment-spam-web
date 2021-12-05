
const POST_COMMENT_BTN = document.getElementById('post');
const COMMENT_TEXT = document.getElementById('comment');
const COMMENTS_LIST = document.getElementById('commentsList');
// CSS styling class to indicate comment is being processed when
// posting to provide visual feedback to users.
const PROCESSING_CLASS = 'processing';
const MODEL_JSON_URL = 'model.json';
// Set the minimum confidence for spam comments to be flagged.
// Remember this is a number from 0 to 1, representing a percentage
// So here 0.75 == 75% sure it is spam.
const SPAM_THRESHOLD = 0.75;

// Create a variable to store the loaded model once it is ready so 
// you can use it elsewhere in the program later.
var model = undefined;
// Store username of logged in user. Right now you have no auth
// so default to Anonymous until known.
var currentUserName = 'Anonymous';
function handleCommentPost() {
  // Only continue if you are not already processing the comment.
  if (! POST_COMMENT_BTN.classList.contains(PROCESSING_CLASS)) {
    POST_COMMENT_BTN.classList.add(PROCESSING_CLASS);
    COMMENT_TEXT.classList.add(PROCESSING_CLASS);
    let currentComment = COMMENT_TEXT.innerText;
    console.log(currentComment);
    
    // TODO: Fill out the rest of this function later.
  }
}

POST_COMMENT_BTN.addEventListener('click', handleCommentPost);

async function loadAndPredict(inputTensor) {
  // Load the model.json and binary files you hosted. Note this is 
  // an asynchronous operation so you use the await keyword
  if (model === undefined) {
    model = await tf.loadLayersModel(MODEL_JSON_URL);
  }
  
  // Once model has loaded you can call model.predict and pass to it
  // an input in the form of a Tensor. You can then store the result.
  var results = await model.predict(inputTensor);
  
  // Print the result to the console for us to inspect.
  results.print();
  
  // TODO: Add extra logic here later to do something useful
}

loadAndPredict(tf.tensor([[1,3,12,18,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]));