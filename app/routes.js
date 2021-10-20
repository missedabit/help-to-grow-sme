const express = require('express')
const router = express.Router()


// Version2

// Add your routes here - above the module.exports line
router.post('/new-software-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var newToSoftware = req.session.data['new-to-software']

  // Check whether the variable matches a condition
  if (newToSoftware  == "Yes"){
    // Send user to next page
    res.redirect('sme-v2/company/company-size')
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
    res.redirect('sme-v2/company/company-size')
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
    res.redirect('sme-v2/company/company-size')
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
    res.redirect('sme-v2/company/ineligible')
  }
})

// Add your routes here - above the module.exports line
router.post('/select-software-category-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var isSoftwareCategory = req.session.data['select-software-category']

  // Check whether the variable matches a condition
  if (isSoftwareCategory  == "CRM"){
    // Send user to next page
    res.redirect('sme-v2/software/select-crm-software')
  } else if (isSoftwareCategory  == "Accounting"){
      // Send user to next page
      res.redirect('sme-v2/software/select-accountancy-software')
  } else {
    // Send user to ineligible page
    res.redirect('sme-v2/software/select-ecommerce-software')
  }
})

// Add your routes here - above the module.exports line
router.post('/company-size-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var isCompanySize = req.session.data['company-size']

  // Check whether the variable matches a condition
  if (isCompanySize  == "no"){
    // Send user to next page
    res.redirect('sme-v2/company/ineligible')
  } else {
    // Send user to ineligible page
    res.redirect('sme-v2/company/companies-house-question')
  }

})



// Version3

// Add your routes here - above the module.exports line
router.post('/sme-v3/new-software-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var newToSoftware = req.session.data['new-to-software']

  // Check whether the variable matches a condition
  if (newToSoftware  == "Yes"){
    // Send user to next page
    res.redirect('company/company-size')
  } else {
    // Send user to ineligible page
    res.redirect('software/major-upgrade')
  }
})

// Add your routes here - above the module.exports line
router.post('/sme-v3/major-upgrade-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var isMajorUpgrade = req.session.data['major-upgrade']

  // Check whether the variable matches a condition
  if (isMajorUpgrade  == "Yes"){
    // Send user to next page
    res.redirect('company/company-size')
  } else {
    // Send user to ineligible page
    res.redirect('software/add-ons')
  }
})

// Add your routes here - above the module.exports line
router.post('/sme-v3/add-on-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var isAddOn = req.session.data['add-on']

  // Check whether the variable matches a condition
  if (isAddOn  == "Yes"){
    // Send user to next page
    res.redirect('company/company-size')
  } else {
    // Send user to ineligible page
    res.redirect('software/ineligible')
  }
})

// Add your routes here - above the module.exports line
router.post('/sme-v3/companies-house-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var isCompaniesHouse = req.session.data['company-number']

  // Check whether the variable matches a condition
  if (isCompaniesHouse  == "Yes"){
    // Send user to next page
    res.redirect('company/companies-house-number')
  } else{
      // Send user to next page
      res.redirect('company/financial-conduct-authority-question')
  }
})



// Add your routes here - above the module.exports line
router.post('/sme-v3/fca-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var isCompaniesHouse = req.session.data['company-number']

  // Check whether the variable matches a condition
  if (isCompaniesHouse  == "Yes"){
    // Send user to next page
    res.redirect('company/financial-conduct-authority-number')
  } else {
      // Send user to next page
      res.redirect('company/fca-ineligible')
  }
})



// Add your routes here - above the module.exports line
router.post('/sme-v3/select-software-category-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var isSoftwareCategory = req.session.data['select-software-category']

  // Check whether the variable matches a condition
  if (isSoftwareCategory  == "customer relationship management"){
    // Send user to next page
    res.redirect('software/select-crm-software')
  } else if (isSoftwareCategory  == "Accounting"){
      // Send user to next page
      res.redirect('software/select-accountancy-software')
  } else {
    // Send user to ineligible page
    res.redirect('software/select-ecommerce-software')
  }
})


// Add your routes here - above the module.exports line
router.post('/sme-v3/company-size-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var isCompanySize = req.session.data['company-size']

  // Check whether the variable matches a condition
  if (isCompanySize  == "no"){
    // Send user to next page
    res.redirect('company/ineligible')
  } else {
    // Send user to ineligible page
    res.redirect('company/companies-house-question')
  }

})




// Version4

// Add your routes here - above the module.exports line
router.post('/sme-v4/new-software-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var newToSoftware = req.session.data['new-to-software']

  // Check whether the variable matches a condition
  if (newToSoftware  == "Yes"){
    // Send user to next page
    res.redirect('company/company-size')
  } else {
    // Send user to ineligible page
    res.redirect('software/major-upgrade')
  }
})

// Add your routes here - above the module.exports line
router.post('/sme-v4/major-upgrade-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var isMajorUpgrade = req.session.data['major-upgrade']

  // Check whether the variable matches a condition
  if (isMajorUpgrade  == "Yes"){
    // Send user to next page
    res.redirect('company/company-size')
  } else {
    // Send user to ineligible page
    res.redirect('software/add-ons')
  }
})

// Add your routes here - above the module.exports line
router.post('/sme-v4/add-on-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var isAddOn = req.session.data['add-on']

  // Check whether the variable matches a condition
  if (isAddOn  == "Yes"){
    // Send user to next page
    res.redirect('company/company-size')
  } else {
    // Send user to ineligible page
    res.redirect('software/ineligible')
  }
})

// Add your routes here - above the module.exports line
router.post('/sme-v4/companies-house-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var isCompaniesHouse = req.session.data['company-number']

  // Check whether the variable matches a condition
  if (isCompaniesHouse  == "Yes"){
    // Send user to next page
    res.redirect('company/companies-house-number')
  } else{
      // Send user to next page
      res.redirect('company/financial-conduct-authority-question')
  }
})



// Add your routes here - above the module.exports line
router.post('/sme-v4/fca-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var isCompaniesHouse = req.session.data['company-number']

  // Check whether the variable matches a condition
  if (isCompaniesHouse  == "Yes"){
    // Send user to next page
    res.redirect('company/financial-conduct-authority-number')
  } else {
      // Send user to next page
      res.redirect('company/fca-ineligible')
  }
})



// Add your routes here - above the module.exports line
router.post('/sme-v4/select-software-category-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var isSoftwareCategory = req.session.data['select-software-category']

  // Check whether the variable matches a condition
  if (isSoftwareCategory  == "customer relationship management"){
    // Send user to next page
    res.redirect('software/select-crm-software')
  } else if (isSoftwareCategory  == "Accounting"){
      // Send user to next page
      res.redirect('software/select-accountancy-software')
  } else {
    // Send user to ineligible page
    res.redirect('software/select-ecommerce-software')
  }
})


// Add your routes here - above the module.exports line
router.post('/sme-v4/company-size-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var isCompanySize = req.session.data['company-size']

  // Check whether the variable matches a condition
  if (isCompanySize  == "no"){
    // Send user to next page
    res.redirect('company/ineligible')
  } else {
    // Send user to ineligible page
    res.redirect('company/companies-house-question')
  }

})


module.exports = router
