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

// Add your routes here - above the module.exports line
router.post('/major-upgrade-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var isMajorUpgrade = req.session.data['major-upgrade']

  // Check whether the variable matches a condition
  if (isMajorUpgrade  == "Yes"){
    // Send user to next page
    res.redirect('sme-v2/company/companies-house-question')
  } else {
    // Send user to ineligible page
    res.redirect('sme-v2/software/add-ons')
  }
})

// Add your routes here - above the module.exports line
router.post('/add-on-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var isAddOn = req.session.data['add-on']

  // Check whether the variable matches a condition
  if (isAddOn  == "Yes"){
    // Send user to next page
    res.redirect('sme-v2/company/companies-house-question')
  } else {
    // Send user to ineligible page
    res.redirect('sme-v2/software/confirmation')
  }
})

// Add your routes here - above the module.exports line
router.post('/companies-house-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var isCompaniesHouse = req.session.data['company-number']

  // Check whether the variable matches a condition
  if (isCompaniesHouse  == "Yes"){
    // Send user to next page
    res.redirect('sme-v2/company/companies-house-number')
  } else if (isCompaniesHouse  == "No FCA"){
      // Send user to next page
      res.redirect('sme-v2/company/financial-conduct-authority-number')
  } else {
    // Send user to ineligible page
    res.redirect('sme-v2/software/confirmation')
  }
})

// Add your routes here - above the module.exports line
router.post('/select-software-category-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var isSoftwareCategory = req.session.data['select-software-category']

  // Check whether the variable matches a condition
  if (isSoftwareCategory  == "CRM"){
    // Send user to next page
    res.redirect('sme-v2/software/select-CRM-software')
  } else if (isSoftwareCategory  == "Accounting"){
      // Send user to next page
      res.redirect('sme-v2/software/select-accountancy-software')
  } else {
    // Send user to ineligible page
    res.redirect('sme-v2/software/select-ecommerce-software')
  }
})



module.exports = router
