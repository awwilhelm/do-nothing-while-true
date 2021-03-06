import router from '@/router/index.js';
import docClient from '@/services/aws.js';
import axios from 'axios';

let convertToMin = function(hour, min) {
  return parseInt(hour)*60 + parseInt(min);
}
var timeoutHolder = null;
var intervalHolder = null;

export default {
  data: function() {
    return data;
  },
  components: {
  },
  methods: {
  },
  mounted: function() {
    let currentThis = this;
    let lastTime = Date.now();
    this.twoSecondsTimerEvents = setInterval(function(){ 
      axios.get('https://xskdpwagbe.execute-api.us-east-1.amazonaws.com/prod').then((response) => {
        let time = new Date();
        if(response.data.data.Item.display_name != currentThis.results.display_name || lastTime != response.data.data.Item.current_time) {
          lastTime = response.data.data.Item.current_time;
          currentThis.iterations = 1;
          currentThis.results = response.data.data.Item;
          $("#slider").stop();
          window.clearInterval(intervalHolder);
          window.clearTimeout(timeoutHolder);
          $("#slider").css('top', '0px');
          setTimeout(function(){cycle(currentThis)}, 200);
          currentThis.mainScreen = false;
        }
        //Open Mister Truman
        //is rollins open
        //what restaurants are open
      })
    }, 5000);
    axios.get('https://xskdpwagbe.execute-api.us-east-1.amazonaws.com/prod').then((response) => {
      let time = new Date();
      currentThis.results = response.data.data.Item;
      //Open Mister Truman
      //is rollins open
      //what restaurants are open
      setTimeout(function(){cycle(currentThis)}, 0);
    });

  $('#slider').css('position', 'absolute');
    
  },
    // 'prepareToExit' method not required here
    // And also there is no need to handle 'beforeRouteLeave' in parent
  beforeDestroy: function() {
      clearInterval(this.twoSecondsTimerEvents)
  }
};

let twoSecondsTimerEvents;

let data = {
  iterations: 1,
  mainScreen: true,
  results: {},
  menu: "Bubble Tea, Fountain Beverage, Hot Tea, Iced Tea, Ramune Soda, Reed's Ginger Brew, Coconut Pecan Cookies (2), Ginger Molasses Cookies (2), Build Your Own Rice Bowl, Chicken Satay, Firecracker Pork, Lettuce Wraps, Sweet Chili Chicken, Thai Chicken Curry, Sabai Salad, Shrimp Spring Rolls, Brown Rice, Cucumber Salad, Daikon Slaw, Fried Pork Roll (1), Fried Rice, Fried Vegetable Roll(1), Ginger Crab Wonton (2), Green Beans, Jasmine Rice, Kimchee, Korean Slaw, Sweet Potatoes, Drunken Noodles, Korean Tacos, Ramen Bowl, Sabai Noodle Bowl, Shrimp Red Curry, Tofu Red Curry".split(', ')
};

function cycle(currentThis) {
  var startTime = +new Date();
  //$('#container').css('overflow', 'hidden');
  
  var slider = $('#slider'),
      items = slider.find(".slide-handler");
  var sliderHeight = slider.height(),
      itemsNum = items.length,
      itemHeight = items.height();
  var startPos = slider.css('top');

  if (sliderHeight <= 550) {
    currentThis.iterations = 1;
    setTimeout(() => {
      currentThis.mainScreen = true;
    }, 5000);
  } else {
    currentThis.iterations = currentThis.results.iterations
  }
  if(currentThis.iterations>1) {
    startCycle(slider,sliderHeight,itemHeight,startPos, currentThis);
  }
}

function startCycle(slider,sliderHeight,itemHeight,startPos,currentThis) {
  timeoutHolder = setTimeout(() => {
    //scrollItems(slider,sliderHeight,itemHeight,startPos);
    // var endTime = +new Date();
    // var diff = endTime - startTime;
    //intervalHolder = setInterval(function(){ 
        scrollItems(slider,sliderHeight,itemHeight,startPos, currentThis);
    //}, 2000);
  }, 2000);
}

function scrollItems(container, targetsHeight, increment, startPos, currentThis) {
  var secs = (targetsHeight-500)/(0.05);
  console.log(targetsHeight);
  console.log(secs);
  console.log("-----------");
  container.stop();
  container.animate({
      'top': '-' + (targetsHeight-500) + 'px'
  }, secs, 'linear', function () {
      container.css('top', startPos);
  }).promise()
  .done(function(){
    currentThis.mainScreen = true;
  });;
}
