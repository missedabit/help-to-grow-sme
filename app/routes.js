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


// Add your routes here - above the module.exports line
router.post('/sme-v4/company/check-company-details', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var companyNumber = req.session.data['companies-house-number']
  var fcaNumber = req.session.data['fca-number']

  // Check whether the variable matches a condition
  if (companyNumber  == "11111"){
    // Send user to next page
    res.redirect('no-companies-house-number')
  } else if (companyNumber  == "33333"){
    // Send user to next page
    res.redirect('no-companies-house-api')
  } else if (fcaNumber  == "666666"){
    // Send user to next page
    res.redirect('no-fca-number')
  } else {
    // Send user to ineligible page
    res.redirect('check-company-details')
  }

})


// Add your routes here - above the module.exports line
router.post('/sme-v4/token-issued', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var CompanyNumber = req.session.data['companies-house-number'];

  // Send user to ineligible page
  if (CompanyNumber  == "22222") {

    res.redirect('/sme-v4/token-not-issued');
  }
  // Send user to Indessa service not available page
  else if (CompanyNumber == "55555") {
    res.redirect('/sme-v4/indessa-not-available');
  }
  else {
    // Send user to next page
    res.redirect('/sme-v4/token-issued');
  }

})

// Version5

// Add your routes here - above the module.exports line
router.post('/sme-v5/new-software-answer', function (req, res) {

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
router.post('/sme-v5/major-upgrade-answer', function (req, res) {

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
router.post('/sme-v5/add-on-answer', function (req, res) {

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
router.post('/sme-v5/companies-house-answer', function (req, res) {

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
router.post('/sme-v5/fca-answer', function (req, res) {

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
router.post('/sme-v5/select-software-category-answer', function (req, res) {

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
//router.post('/sme-v5/company-size-answer', function (req, res) {
//
//  // Make a variable and give it the value from 'new-to-software'
//  var isCompanySize = req.session.data['company-size']
//
//  // Check whether the variable matches a condition
//  if (isCompanySize  == "no"){
//    // Send user to next page
//    res.redirect('company/ineligible')
//  } else {
//    // Send user to ineligible page
//    res.redirect('company/companies-house-question')
//  }
//
//})


// Add your routes here - above the module.exports line
router.post('/sme-v5/company/check-company-details', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var companyNumber = req.session.data['companies-house-number']
  var fcaNumber = req.session.data['fca-number']

  // Check whether the variable matches a condition
  if (companyNumber  == "11111"){
    // Send user to next page
    res.redirect('no-companies-house-number')
  } else if (companyNumber  == "33333"){
    // Send user to next page
    res.redirect('no-companies-house-api')
  } else if (fcaNumber  == "666666"){
    // Send user to next page
    res.redirect('no-fca-number')
  } else {
    // Send user to ineligible page
    res.redirect('check-company-details')
  }

})


// Add your routes here - above the module.exports line
router.post('/sme-v5/company/companies-house-question', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var companySize = req.session.data['companies-size']
  // var fcaNumber = req.session.data['fca-number']

  // Check whether the variable matches a condition
  if (companySize  == "1"){
    // Send user to next page
    res.redirect('ineligible')
  } else if (companySize  == "5"){
    // Send user to next page
    res.redirect('companies-house-question')
  } else if (companySize  == "251"){
    // Send user to next page
    res.redirect('ineligible')
  } else {
    // Send user to ineligible page
    res.redirect('companies-house-question')
  }

})


// Add your routes here - above the module.exports line
router.post('/sme-v5/token-issued', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var CompanyNumber = req.session.data['companies-house-number'];

  // Send user to ineligible page
  if (CompanyNumber  == "22222") {

    res.redirect('/sme-v5/token-not-issued');
  }
  // Send user to Indessa service not available page
  else if (CompanyNumber == "55555") {
    res.redirect('/sme-v5/indessa-not-available');
  }
  else {
    // Send user to next page
    res.redirect('/sme-v5/token-issued');
  }

})


module.exports = router
