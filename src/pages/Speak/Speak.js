import router from '@/router/index.js';
import docClient from '@/services/aws.js';
import axios from 'axios';

  

let convertToMin = function(hour, min) {
  console.log(parseInt(hour) + " " + parseInt(min));
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
    this.twoSecondsTimerEvents = setInterval(function(){ 
      axios.get('https://xskdpwagbe.execute-api.us-east-1.amazonaws.com/prod').then((response) => {
        let time = new Date();
        console.log(response.data.data.Item);
        console.log(Date.now() - response.data.data.Item.current_time);
        if(response.data.data.Item.display_name != currentThis.results.display_name) {
          console.log('here');
          currentThis.iterations = 1;
          currentThis.results = response.data.data.Item;
          console.log(intervalHolder);
          console.log(timeoutHolder);
          clearInterval(intervalHolder);
          clearTimeout(timeoutHolder);
          $('#slider').css('top', '0px');
          //setTimeout(function(){cycle(currentThis)}, 200);
        }
        //Open Mister Truman
        //is rollins open
        //what restaurants are open
      })
    }, 5000);
    axios.get('https://xskdpwagbe.execute-api.us-east-1.amazonaws.com/prod').then((response) => {
      let time = new Date();
      console.log(response.data.data.Item);
      console.log(Date.now() - response.data.data.Item.current_time);
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
      console.log("Stopping the interval timer")
      clearInterval(this.twoSecondsTimerEvents)
  }
};

let twoSecondsTimerEvents;

let data = {
  iterations: 1,
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
  } else {
    currentThis.iterations = currentThis.results.iterations
  }
  if(currentThis.iterations>1) {
    startCycle(slider,sliderHeight,itemHeight,startPos);
  }
}

function startCycle(slider,sliderHeight,itemHeight,startPos) {
  timeoutHolder = setTimeout(() => {
    //scrollItems(slider,sliderHeight,itemHeight,startPos);
    // var endTime = +new Date();
    // var diff = endTime - startTime;
    intervalHolder = setInterval(function(){ 
        scrollItems(slider,sliderHeight,itemHeight,startPos);
    }, 2000);
  }, 2000);
}

function scrollItems(container, targetsHeight, increment, startPos) {
  if(parseInt(container.css('top'))*-1 > (container.height()-300))
  {
    console.log("yessss");
  }
  var secs = 70 * 1000;
  container.animate({
      'top': '-' + (2000) + 'px'
  }, secs, 'linear', function () {
      container.css('top', startPos);
  });
}
