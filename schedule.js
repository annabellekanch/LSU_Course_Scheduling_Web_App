var itemsSchedule = 
[
    
    {
      id:"CSC-1351-1",
      keyfrom: "e",
      keyto: "nt",
      text: "<h3 style = 'font-style: italic; font-weight: 400;' >CSC 1351</h3><br><h4 style = 'font-weight: 400; font-style: italic;'>Dr. Brener</h4><br><h5>8:00 A.M. - 9:30 A.M.</h5>",
      bg: "blue",
      days: ['monday']
    },
    {
      id:"CSC-1351-1",
      keyfrom: "e",
      keyto: "nt",
      text: "<h3 style = 'font-style: italic; font-weight: 400;' >CSC 1351</h3><br><h4 style = 'font-weight: 400; font-style: italic;'>Dr. Brener</h4><br><h5>8:00 A.M. - 9:30 A.M.</h5>",
      bg: "blue",
      days: ['wednesday']
    },
    {
      id:"CSC-1351-1",
      keyfrom: "e",
      keyto: "nt",
      text: "<h3 style = 'font-style: italic; font-weight: 400;' >CSC 1351</h3><br><h4 style = 'font-weight: 400; font-style: italic;'>Dr. Brener</h4><br><h5>8:00 A.M. - 9:30 A.M.</h5>",
      bg: "blue",
      days: ['friday']
    }

]
itemsSchedule.forEach(function(sitem, index) {
    // console.log(index,sitem)
    sitem.days.forEach(function(sday, dindex) {
      // console.log(sday, dindex)
      $(".schedule").append(
        '<div class="schedule-item'
        + ' schedule-' + sday
        + ' time-from-' + sitem.keyfrom
        + ' time-to-' + sitem.keyto
        + ' nt bg-' + sitem.bg + '">'
        + sitem.text
        + '</div>'
      )
    })
  })
