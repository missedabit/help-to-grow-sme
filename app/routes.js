const express = require('express')
const router = express.Router()


// Add your routes here - above the module.exports line
router.post('/new-software-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var newToSoftware = req.session.data['new-to-software']

  // Check whether the variable matches a condition
  if (newToSoftware  == "Yes"){
    // Send user to next page
    res.redirect('sme-v2/company/companies-house-question')
  } else {
    // Send user to ineligible page
    res.redirect('sme-v2/software/major-upgrade')
  }
})


module.exports = router
