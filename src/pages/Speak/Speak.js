import router from '@/router/index.js';
import docClient from '@/services/aws.js';
import axios from 'axios';

  axios.get('https://xskdpwagbe.execute-api.us-east-1.amazonaws.com/prod').then((response) => {
    let time = new Date();
    console.log(response.data.data.Item);
    console.log(Date.now() - response.data.data.Item.current_time);
    //Open Mister Truman
    //is rollins open
    //what restaurants are open



    // let oldTime = response.data.data.Item.current_time;
    // let oldTimeArray = oldTime.split(":");
    // console.log(response.data.data.Item);
    // let minutesSince = convertToMin(time.getHours(), time.getMinutes()) - convertToMin(oldTimeArray[0], oldTimeArray[1]);

  }) 

let convertToMin = function(hour, min) {
  console.log(parseInt(hour) + " " + parseInt(min));
  return parseInt(hour)*60 + parseInt(min);
}

export default {
  components: {
  },
  methods: {
  },
  mounted: function() {
    // this.twoSecondsTimerEvents = setInterval(function(){ 
    //   axios.get('https://xskdpwagbe.execute-api.us-east-1.amazonaws.com/prod').then((response) => {
    //     console.log(response.data.data.Item);
    //   })
    // }, 2000);
  },
    // 'prepareToExit' method not required here
    // And also there is no need to handle 'beforeRouteLeave' in parent
  beforeDestroy: function() {
      console.log("Stopping the interval timer")
      clearInterval(this.twoSecondsTimerEvents)
  }
};

let twoSecondsTimerEvents;