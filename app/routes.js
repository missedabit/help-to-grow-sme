const express = require('express')
const router = express.Router()


// Add your routes here - above the module.exports line
router.post('/new-software-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var newSoftwareAnswer = req.session.data['new-to-software']

  // Check whether the variable matches a condition
  if (newSoftwareAnswer  == "Yes"){
    // Send user to next page
    res.redirect('major-upgrade')
  } else {
    // Send user to ineligible page
    res.redirect('major-upgrade')
  }

})

module.exports = router
