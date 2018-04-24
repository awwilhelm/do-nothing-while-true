<template>
  <div>
    <!-- <div v-for="(item, index) in results.json" :key="`results-${index}`">
      <span>{{item.name}}</span>
    </div> -->

    <button v-on:click="stop()">stop</button>
    <div v-if="false" class="landing-page">
      <div class="logo-container">
        <img class="logo" src="../../assets/rawlogo2.png">
      </div>
        <h1><b>Hi, I'm Truman. Ask me anything about campus</b></h1>
        <h3>To get my attention say <b>"Hey Truman"</b>, followed by your question</h3>
    </div>
    <div class="center-speak" v-else>
      <img class="header-logo" src="../../assets/rawlogo2.png">
      <div class="center">
        <div class="visual-container">
          <div class="main-header"> {{results.display_name}} </div>
          <div id='container'>
            <div id='slider'>
              <!-- <ul>
                <div v-for="(item, index) in menu" :key="`menu-${index}`">
                  <li>{{item}}</li>
                </div>
              </ul> -->
              <div class="multiple-overview">
                <div class="full-width" v-for="n in iterations" :key="`iterations-${n}`">
                  <div class="all-hours-if" v-if="results.display_id == 0">
                    <div class="all-hours">
                      <div class="slide-handler" v-for="(item, index) in results.json" :key="`all-hours-${index}`">
                        <div class="all-hours-name header">{{item.name}}</div>
                        <div class="all-hours-open">
                          <div class="all-hours-open-item" v-for="(itemHours, index) in item.hours" :key="`all-hours-open-${index}`">
                            {{itemHours.open}} - {{itemHours.close}}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              
                  <div class="all-hours-if" v-if="results.display_id == 1">
                    <div class="all-rollins-hours">
                      <div class="slide-handler temp" v-for="(item, index) in results.json" :key="`all-hours-${index}`">
                        <div class="header">Monday</div>
                        <div class="all-hours-open">
                          <div class="all-hours-open-item" v-for="(itemHours, index) in item.monday" :key="`all-hours-open-${index}`">
                            {{itemHours.open}} - {{itemHours.close}}
                          </div>
                        </div>
                        <div class="header">Tuesday</div>
                        <div class="all-hours-open">
                          <div class="all-hours-open-item" v-for="(itemHours, index) in item.tuesday" :key="`all-hours-open-${index}`">
                            {{itemHours.open}} - {{itemHours.close}}
                          </div>
                        </div>
                        <div class="header">Wednesday</div>
                        <div class="all-hours-open">
                          <div class="all-hours-open-item" v-for="(itemHours, index) in item.wednesday" :key="`all-hours-open-${index}`">
                            {{itemHours.open}} - {{itemHours.close}}
                          </div>
                        </div>
                        <div class="header">Thursday</div>
                        <div class="all-hours-open">
                          <div class="all-hours-open-item" v-for="(itemHours, index) in item.thursday" :key="`all-hours-open-${index}`">
                            {{itemHours.open}} - {{itemHours.close}}
                          </div>
                        </div>
                        <div class="header">Friday</div>
                        <div class="all-hours-open">
                          <div class="all-hours-open-item" v-for="(itemHours, index) in item.friday" :key="`all-hours-open-${index}`">
                            {{itemHours.open}} - {{itemHours.close}}
                          </div>
                        </div>
                        <div class="header">Saturday</div>
                        <div class="all-hours-open">
                          <div class="all-hours-open-item" v-for="(itemHours, index) in item.saturday" :key="`all-hours-open-${index}`">
                            {{itemHours.open}} - {{itemHours.close}}
                          </div>
                        </div>
                        <div class="header">Sunday</div>
                        <div class="all-hours-open">
                          <div class="all-hours-open-item" v-for="(itemHours, index) in item.sunday" :key="`all-hours-open-${index}`">
                            {{itemHours.open}} - {{itemHours.close}}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="all-hours-if" v-if="results.display_id == 2">
                    <div class="all-hours" v-for="(item, index) in results.json" :key="`menus-${index}`">
                      <div class="header"> {{(item.day.charAt(0).toUpperCase() + item.day.substr(1))}} </div>
                      <div v-for="(itemHours, index) in item.hours" :key="`menu-hours-${index}`">
                        <div><b>{{itemHours.open}} - {{itemHours.close}}</b></div>
                        <div class="menu-hours">
                          <div class="menu-hours-items" v-for="(itemMenu, index) in itemHours.menu.split(', ')" :key="`all-hours-open-${index}`">
                            {{itemMenu}}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="all-hours-if" v-if="results.display_id == 3">
                    <div class="all-hours-open-item slide-handler" v-for="(item, index) in results.json" :key="`events-${index}`">
                      <!-- <div class="events-org-name">{{item.name}}</div> -->
                      <div class="all-hours-open-item" v-for="(itemEvents, index) in item.events" :key="`all-events-${index}`">
                        <div class="event-title">{{itemEvents.title}}</div>
                        <div>{{itemEvents.description}}</div>
                        <div class="event-details">
                          <div class="event-align"><div class="event-details-name">Date: </div>{{itemEvents.date}}</div>
                          <div class="event-align"><div class="event-details-name">Start Time: </div>{{itemEvents.start}}</div>
                          <div class="event-align"><div class="event-details-name">End Time: </div>{{itemEvents.end}}</div>
                          <div class="event-align"><div class="event-details-name">Location: </div>{{itemEvents.location}}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="all-hours-if" v-if="results.display_id == 5">
                    <div class="all-hours-open-item slide-handler" v-for="(item, index) in results.json.questions" :key="`help-${index}`">
                      <div class="header"> {{item.question}} </div>
                    </div>
                  </div>
                  <div class="center-all">
                    <div class='section-break'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
</template>

<script src="./Speak.js"></script>
<style scoped src="./Speak.scss"></style>