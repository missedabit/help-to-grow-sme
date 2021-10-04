const express = require('express')
const router = express.Router()


// Add your routes here - above the module.exports line
router.post('/new-software-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var newToSoftware = req.session.data['new-to-software']

  // Check whether the variable matches a condition
  if (newToSoftware  == "Yes"){
    // Send user to next page
    res.redirect('sme-v3/company/company-size')
  } else {
    // Send user to ineligible page
    res.redirect('sme-v3/software/major-upgrade')
  }
})

// Add your routes here - above the module.exports line
router.post('/major-upgrade-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var isMajorUpgrade = req.session.data['major-upgrade']

  // Check whether the variable matches a condition
  if (isMajorUpgrade  == "Yes"){
    // Send user to next page
    res.redirect('sme-v3/company/company-size')
  } else {
    // Send user to ineligible page
    res.redirect('sme-v3/software/add-ons')
  }
})

// Add your routes here - above the module.exports line
router.post('/add-on-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var isAddOn = req.session.data['add-on']

  // Check whether the variable matches a condition
  if (isAddOn  == "Yes"){
    // Send user to next page
    res.redirect('sme-v3/company/company-size')
  } else {
    // Send user to ineligible page
    res.redirect('sme-v3/software/confirmation')
  }
})

// Add your routes here - above the module.exports line
router.post('/companies-house-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var isCompaniesHouse = req.session.data['company-number']

  // Check whether the variable matches a condition
  if (isCompaniesHouse  == "Yes"){
    // Send user to next page
    res.redirect('sme-v3/company/companies-house-number')
  } else if (isCompaniesHouse  == "No FCA"){
      // Send user to next page
      res.redirect('sme-v3/company/financial-conduct-authority-number')
  } else {
    // Send user to ineligible page
    res.redirect('sme-v3/company/ineligible')
  }
})

// Add your routes here - above the module.exports line
router.post('/select-software-category-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var isSoftwareCategory = req.session.data['select-software-category']

  // Check whether the variable matches a condition
  if (isSoftwareCategory  == "CRM"){
    // Send user to next page
    res.redirect('sme-v3/software/select-crm-software')
  } else if (isSoftwareCategory  == "Accounting"){
      // Send user to next page
      res.redirect('sme-v3/software/select-accountancy-software')
  } else {
    // Send user to ineligible page
    res.redirect('sme-v3/software/select-ecommerce-software')
  }
})

// Add your routes here - above the module.exports line
router.post('/company-size-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var isCompanySize = req.session.data['company-size']

  // Check whether the variable matches a condition
  if (isCompanySize  == "no"){
    // Send user to next page
    res.redirect('sme-v3/company/ineligible')
  } else {
    // Send user to ineligible page
    res.redirect('sme-v3/company/companies-house-question')
  }

})


module.exports = router
