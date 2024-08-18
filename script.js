function showForm() {
    const service = document.getElementById('serviceSelect').value;
    const formContainer = document.getElementById('formContainer');
    formContainer.innerHTML = ''; // Clear previous form

    if (service === '') return;

    let formHTML = `
        <h2 class="display-4 mb-4 text-center">${getServiceTitle(service)}</h2>
 
        <form id="serviceForm" method="post" enctype="multipart/form-data">
            ${getFormFields(service)}
            <h3>Proof of Payment</h3>
            <div class="form-floating mb-3">
                <input type="file" class="form-control" name="proofOfPayment" required>
                <label for="proofOfPayment">Upload Proof of Payment</label>
            </div>
            <button class="btn btn-primary w-100 py-3" type="submit">Submit Request</button>
        </form>
    `;
    
    formContainer.innerHTML = formHTML;
}

function getServiceTitle(service) {
    switch (service) {
        case 'companyRegistration': return 'Company Registration';
        case 'tenderServices': return 'Tender Services';
        case 'digitalMarketing': return 'Digital Marketing';
        case 'dramaWriting': return 'Drama Writing Services';
        case 'songwriting': return 'Songwriting Services';
        case 'payroll': return 'Payroll Services';
        case 'debitrescue': return 'Debt Rescue';
        case 'stockvel': return 'Stockvel and Society Groups';
        case 'retirementPlanning': return 'Retirement Planning';
        case 'wealthManagement': return 'Wealth Management';
        case 'creditLending': return 'Credit Lending';
        case 'insurance': return 'Insurance';
        case 'valueAddedServices': return 'Value Added Services';
        default: return '';
    }
}

function getFormFields(service) {
    switch (service) {
        case 'companyRegistration':
            return `
                <div class="row g-3">
                       <p>Our company registration service offering costs R499 and takes a minimum of 24 hours to a maximum of 3 days to be complete. 

Please fill out the form and upload proof of payment.</strong></p>
                    <!-- Preferred Business Name 1 -->
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="preferredBusinessName1" placeholder="Preferred Business Name 1" required>
                            <label for="preferredBusinessName1">Preferred Business Name 1</label>
                        </div>
                    </div>
                    <!-- Preferred Business Name 2 -->
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="preferredBusinessName2" placeholder="Preferred Business Name 2" required>
                            <label for="preferredBusinessName2">Preferred Business Name 2</label>
                        </div>
                    </div>
                    <!-- Business Type -->
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="businessType" placeholder="Business Type" required>
                            <label for="businessType">Business Type</label>
                        </div>
                    </div>
                    <!-- Business Address -->
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="businessAddress" placeholder="Business Address" required>
                            <label for="businessAddress">Business Address</label>
                        </div>
                    </div>
                    <!-- Residential Address -->
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="residentialAddress" placeholder="Residential Address" required>
                            <label for="residentialAddress">Residential Address</label>
                        </div>
                    </div>
                    <!-- Contact Information -->
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="contactInfo" placeholder="Contact Information" required>
                            <label for="contactInfo">Contact Information</label>
                        </div>
                    </div>
                    <!-- Cell Number -->
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="cellNumber" placeholder="Cell Number" required>
                            <label for="cellNumber">Cell Number</label>
                        </div>
                    </div>
                    <!-- Email Address -->
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="email" class="form-control" id="emailAddress" placeholder="Email Address" required>
                            <label for="emailAddress">Email Address</label>
                        </div>
                    </div>
                    <!-- ID Number -->
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="idNumber" placeholder="ID Number" required>
                            <label for="idNumber">ID Number</label>
                        </div>
                    </div>
                    <!-- Identification Documents -->
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="file" class="form-control" id="idDocuments" placeholder="Identification Documents" required>
                            <label for="idDocuments">Identification Documents</label>
                        </div>
                    </div>
                  
                    <!-- Business Plan (Optional) -->
                    <div class="col-12">
                        <div class="form-floating">
                            <textarea class="form-control" id="businessPlan" placeholder="Business Plan (optional)" style="height: 150px;"></textarea>
                            <label for="businessPlan">Special Instructions(optional)</label>
                        </div>
                    </div>
                </div>
            `;
        
        case 'tenderServices':
    return `
    <div class="container text-center my-4">
  
    <p>Our tender service offering allows you to select the certificate you want to apply for at the bottom. All certificates are done within 24 hours the earliest  to 3 days the latest to complete.
Please fill out the form and upload proof of payment.</p>
</div>
        <div class="row g-3">
            <div class="col-md-6">
                <div class="form-floating">
                    <input type="text" class="form-control" id="businessName" placeholder="Company Name" required>
                    <label for="companyName">Company Name</label>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-floating">
                    <input type="text" class="form-control" id="regno" placeholder="Contact Information" required>
                    <label for="regno">Company Registration Number</label>
                </div>
            </div>
          

              <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="cellNumber" placeholder="Cell Number" required>
                            <label for="cellNumber">Cell Number</label>
                        </div>
                    </div>

                      <!-- Email Address -->
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="email" class="form-control" id="emailAddress" placeholder="Email Address" required>
                            <label for="emailAddress">Email Address</label>
                        </div>
                    </div>

                
                     <div class="col-md-6">
                <div class="form-floating">
                    <input type="text" class="form-control" id="fullnames" placeholder="Full Names" required>
                    <label for="idNumber">Director Full Names</label>
                </div>
            </div>

            <div class="col-md-6">
                <div class="form-floating">
                    <input type="text" class="form-control" id="idNumber" placeholder="ID Number" required>
                    <label for="idNumber">ID Number</label>
                </div>
            </div>

            <div class="col-md-6">
                <div class="form-floating">
                    <textarea class="form-control" id="sinstruct" placeholder="special instruction" style="height: 150px;" required></textarea>
                    <label for="relevantExperience">Special Instructions</label>
                </div>
            </div>

            <!-- Company Income Tax -->
<div class="mb-4">
    <label for="companyIncomeTax" class="form-label">Company Income Tax</label>
    <input type="text" class="form-control" id="companyIncomeTax" name="companyIncomeTax" placeholder="Enter your Company Income Tax number" required>

</div>

      <div class="col-md-6">
                <div class="form-floating">
                    <input type="file" class="form-control" id="tenderDocument" placeholder="Tender Document (if available)" required>
                    <label for="tenderDocument">CK/COR 13.4</label><br>
                </div>
            </div>

            <div class="col-md-6">
                <div class="form-floating">
                    <input type="file" class="form-control" id="financialStatements" placeholder="Supporting Docs" required>
                    <label for="sdocs">Supporting Documents(optional)</label>
                </div>
            </div>

     


            <div class="col-12">
                <label>Select Additional Services:</label>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="bbbee" value="BBB-EE R300">
                    <label class="form-check-label" for="bbbee">BBB-EE R300</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="csd" value="CSD Registration R600">
                    <label class="form-check-label" for="csd">CSD Registration R600</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="cidb" value="CIDB Registration R800">
                    <label class="form-check-label" for="cidb">CIDB Registration R800</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="coida" value="COIDA Registration R1800">
                    <label class="form-check-label" for="coida">COIDA Registration R1800</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="taxClearance" value="Tax Clearance R400">
                    <label class="form-check-label" for="taxClearance">Tax Clearance R400</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="letterHead" value="Letter Head R300">
                    <label class="form-check-label" for="letterHead">Letter Head R300</label>
                </div>
            </div>
        </div>
    `;
        case 'digitalMarketing':
            return `
                <div class="row g-3">
                <p>Let us plan and run a marketing campaign for your company, plan, design, run and Optimize Google Ads and social platforms advertising for your company depending on your budget and target audience</p>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="businessName" placeholder="Business Name" required>
                            <label for="businessName">Business Name</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="contactInfo" placeholder="Contact Information" required>
                            <label for="contactInfo">Contact Information</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <textarea class="form-control" id="businessGoals" placeholder="Business Goals" style="height: 150px;" required></textarea>
                            <label for="businessGoals">Business Goals</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <textarea class="form-control" id="targetAudience" placeholder="Target Audience" style="height: 150px;" required></textarea>
                            <label for="targetAudience">Target Audience</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <textarea class="form-control" id="currentMarketingEfforts" placeholder="Current Marketing Efforts" style="height: 150px;" required></textarea>
                            <label for="currentMarketingEfforts">Current Marketing Efforts</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="number" class="form-control" id="budget" placeholder="Budget" required>
                            <label for="budget">Budget</label>
                        </div>
                    </div>
                
                
      <div class="col-md-6">
                <div class="form-floating">
                    <input type="file" class="form-control" id="tenderDocument" placeholder="Tender Document (if available)" required>
                    <label for="tenderDocument">Business  Profile</label><br>
                </div>
            </div>    
                

                    <div class="col-md-6">
                <div class="form-floating">
                    <textarea class="form-control" id="sinstruct" placeholder="special instruction" style="height: 150px;" required></textarea>
                    <label for="relevantExperience">Special Instructions</label>
                </div>
            </div>z
                </div>
            `;
        case 'dramaWriting':
            return `
                <div class="row g-3">
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="projectName" placeholder="Project Name" required>
                            <label for="projectName">Project Name</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="contactInfo" placeholder="Contact Information" required>
                            <label for="contactInfo">Contact Information</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <textarea class="form-control" id="projectBrief" placeholder="Project Brief" style="height: 150px;" required></textarea>
                            <label for="projectBrief">Project Brief</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="lengthFormat" placeholder="Length and Format" required>
                            <label for="lengthFormat">Length and Format</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="date" class="form-control" id="deadline" placeholder="Deadline" required>
                            <label for="deadline">Deadline</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="email" placeholder="email" required>
                            <label for="idNumber">Email</label>
                        </div>
                    </div>
                </div>
            `;
        case 'songwriting':
            return `
                <div class="row g-3">
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="projectName" placeholder="Project Name" required>
                            <label for="projectName">Project Name</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="contactInfo" placeholder="Contact Information" required>
                            <label for="contactInfo">Contact Information</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <textarea class="form-control" id="songBrief" placeholder="Song Brief" style="height: 150px;" required></textarea>
                            <label for="songBrief">Song Brief</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="lyricsMelodies" placeholder="Lyrics or Melodies" required>
                            <label for="lyricsMelodies">Lyrics or Melodies</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="date" class="form-control" id="deadline" placeholder="Deadline" required>
                            <label for="deadline">Deadline</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="genre" placeholder="Genre" required>
                            <label for="idNumber">Genre</label>
                        </div>
                    </div>
                </div>
            `;
        case 'payroll':
            return `
                <div class="row g-3">
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="businessName" placeholder="Business Name" required>
                            <label for="businessName">Business Name</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="contactInfo" placeholder="Contact Information" required>
                            <label for="contactInfo">Contact Information</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <textarea class="form-control" id="employeeDetails" placeholder="Number Of Employees" style="height: 150px;" required></textarea>
                            <label for="employeeDetails">Number Of Employees</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="businessaddress" placeholder="Business Address" required>
                            <label for="paymentSchedule">Business Address</label>
                        </div>
                    </div>
                
                </div>
            `;
        case 'debitrescue':
            return `
              <div class="row g-3">
    <p>Are you struggling due to debts, arrears, and default accounts? Let us help you out of debt and help you settle and achieve a clean credit score.</p>
    
    <!-- Full Names -->
    <div class="col-md-6">
        <div class="form-floating">
            <input type="text" class="form-control" id="fullNames" placeholder="Full Names" required>
            <label for="fullNames">Full Names</label>
        </div>
    </div>

    <!-- Surname -->
    <div class="col-md-6">
        <div class="form-floating">
            <input type="text" class="form-control" id="surname" placeholder="Surname" required>
            <label for="surname">Surname</label>
        </div>
    </div>

    <!-- ID Number -->
    <div class="col-md-6">
        <div class="form-floating">
            <input type="text" class="form-control" id="idNumber" placeholder="ID Number" required>
            <label for="idNumber">ID Number</label>
        </div>
    </div>

    <!-- Contact Number -->
    <div class="col-md-6">
        <div class="form-floating">
            <input type="text" class="form-control" id="contactNumber" placeholder="Contact Number" required>
            <label for="contactNumber">Contact Number</label>
        </div>
    </div>

    <!-- Email Address -->
    <div class="col-md-6">
        <div class="form-floating">
            <input type="email" class="form-control" id="emailAddress" placeholder="Email Address" required>
            <label for="emailAddress">Email Address</label>
        </div>
    </div>

    <!-- Total Accounts Balance -->
    <div class="col-md-6">
        <div class="form-floating">
            <input type="number" class="form-control" id="totalAccountsBalance" placeholder="Total Accounts Balance" required>
            <label for="totalAccountsBalance">Total Accounts Balance</label>
        </div>
    </div>

    <!-- Consent to Credit Assessment -->
    <div class="col-12">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="creditConsent" required>
            <label class="form-check-label" for="creditConsent">
                I give consent to Aid Finance to do a credit assessment and credit report on my ID number.
            </label>
        </div>
    </div>

    <!-- Accept Terms and Conditions -->
    <div class="col-12">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="acceptTerms" required>
            <label class="form-check-label" for="acceptTerms">
                I accept the terms and conditions.
            </label>
        </div>
    </div>
</div>

            `;
        case 'stockvelSocietyGroups':
            return `
            <p>Register your Stokvel / society group to become a private investor in Aid Finance and get returns for your investment.</p>
                <div class="row g-3">
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="groupName" placeholder="Group Name" required>
                            <label for="groupName">Group Name</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="contactInfo" placeholder="Contact Information" required>
                            <label for="contactInfo">Contact Information</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <textarea class="form-control" id="groupObjectives" placeholder="Group Objectives" style="height: 150px;" required></textarea>
                            <label for="groupObjectives">Group Objectives</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <textarea class="form-control" id="membershipDetails" placeholder="Membership Details" style="height: 150px;" required></textarea>
                            <label for="membershipDetails">Membership Details</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <textarea class="form-control" id="financialStatus" placeholder="Financial Status" style="height: 150px;" required></textarea>
                            <label for="financialStatus">Financial Status</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="idNumber" placeholder="ID Number" required>
                            <label for="idNumber">ID Number</label>
                        </div>
                    </div>
                </div>
            `;
        case 'retirementPlanning':
            return `
                <div class="row g-3">
               <p>Have you worked hard and smart and earned yourself massive wealth or you have received an inheritance and are looking for wisdom of wealth management.

Please fill out the form and one of our friendly consultants will contact you.</p>
    <!-- Personal Details -->
    <div class="col-md-6">
        <div class="form-floating">
            <input type="text" class="form-control" id="personalDetails" placeholder="Personal Details" required>
            <label for="personalDetails">Personal Details</label>
        </div>
    </div>

    <!-- Contact Number -->
    <div class="col-md-6">
        <div class="form-floating">
            <input type="text" class="form-control" id="contactNumber" placeholder="Contact Number" required>
            <label for="contactNumber">Contact Number</label>
        </div>
    </div>

    <!-- Email Address -->
    <div class="col-md-6">
        <div class="form-floating">
            <input type="email" class="form-control" id="emailAddress" placeholder="Email Address" required>
            <label for="emailAddress">Email Address</label>
        </div>
    </div>

    <!-- Occupation -->
    <div class="col-md-6">
        <div class="form-floating">
            <input type="text" class="form-control" id="occupation" placeholder="Occupation" required>
            <label for="occupation">Occupation</label>
        </div>
    </div>

    <!-- Current Financial Status -->
    <div class="col-md-6">
        <div class="form-floating">
            <textarea class="form-control" id="currentFinancialStatus" placeholder="Current Financial Status" style="height: 150px;" required></textarea>
            <label for="currentFinancialStatus">Current Financial Status</label>
        </div>
    </div>

    <!-- Retirement Goals -->
    <div class="col-md-6">
        <div class="form-floating">
            <textarea class="form-control" id="retirementGoals" placeholder="Retirement Goals" style="height: 150px;" required></textarea>
            <label for="retirementGoals">Retirement Goals</label>
        </div>
    </div>

    <!-- Existing Plans -->
    <div class="col-md-6">
        <div class="form-floating">
            <textarea class="form-control" id="existingPlans" placeholder="Existing Plans" style="height: 150px;" required></textarea>
            <label for="existingPlans">Existing Plans</label>
        </div>
    </div>

    <!-- ID Number -->
    <div class="col-md-6">
        <div class="form-floating">
            <input type="text" class="form-control" id="idNumber" placeholder="ID Number" required>
            <label for="idNumber">ID Number</label>
        </div>
    </div>
</div>

                </div>
            `;
        case 'wealthManagement':
            return `
     <div class="row g-3">
    <!-- Full Names -->
    <div class="col-md-6">
        <div class="form-floating">
            <input type="text" class="form-control" id="fullNames" placeholder="Full Names" required>
            <label for="fullNames">Full Names</label>
        </div>
    </div>

    <!-- Surname -->
    <div class="col-md-6">
        <div class="form-floating">
            <input type="text" class="form-control" id="surname" placeholder="Surname" required>
            <label for="surname">Surname</label>
        </div>
    </div>

    <!-- Contact Number -->
    <div class="col-md-6">
        <div class="form-floating">
            <input type="text" class="form-control" id="contactNumber" placeholder="Contact Number" required>
            <label for="contactNumber">Contact Number</label>
        </div>
    </div>

    <!-- Email Address -->
    <div class="col-md-6">
        <div class="form-floating">
            <input type="email" class="form-control" id="emailAddress" placeholder="Email Address" required>
            <label for="emailAddress">Email Address</label>
        </div>
    </div>

    <!-- Current Financial Status -->
    <div class="col-md-6">
        <div class="form-floating">
            <textarea class="form-control" id="currentFinancialStatus" placeholder="Current Financial Status" style="height: 150px;" required></textarea>
            <label for="currentFinancialStatus">Current Financial Status</label>
        </div>
    </div>

    <!-- Financial Goals -->
    <div class="col-md-6">
        <div class="form-floating">
            <textarea class="form-control" id="financialGoals" placeholder="Financial Goals" style="height: 150px;" required></textarea>
            <label for="financialGoals">Financial Goals</label>
        </div>
    </div>

    <!-- Investment Portfolio Upload -->
    <div class="col-md-12">
        <div class="form-floating">
            <input type="file" class="form-control" id="investmentPortfolio" required>
            <label for="investmentPortfolio">Upload Investment Portfolio</label>
        </div>
    </div>
</div>


            `;
        case 'creditLending':
            return `
                <div class="row g-3">
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="name" placeholder="Personal or Business Name" required>
                            <label for="name">Personal or Business Name</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="contactInfo" placeholder="Contact Information" required>
                            <label for="contactInfo">Contact Information</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="number" class="form-control" id="creditAmount" placeholder="Credit Amount" required>
                            <label for="creditAmount">Credit Amount</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <textarea class="form-control" id="creditPurpose" placeholder="Purpose of Credit" style="height: 150px;" required></textarea>
                            <label for="creditPurpose">Purpose of Credit</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <textarea class="form-control" id="financialStatements" placeholder="Financial Statements" style="height: 150px;" required></textarea>
                            <label for="financialStatements">Financial Statements</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="idNumber" placeholder="ID Number" required>
                            <label for="idNumber">ID Number</label>
                        </div>
                    </div>
                </div>
            `;
        case 'bankingServices':
            return `
                <div class="row g-3">
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="name" placeholder="Personal or Business Name" required>
                            <label for="name">Personal or Business Name</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="contactInfo" placeholder="Contact Information" required>
                            <label for="contactInfo">Contact Information</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <textarea class="form-control" id="bankingNeeds" placeholder="Banking Needs" style="height: 150px;" required></textarea>
                            <label for="bankingNeeds">Banking Needs</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="idNumber" placeholder="ID Number" required>
                            <label for="idNumber">ID Number</label>
                        </div>
                    </div>
                </div>
            `;
        case 'insurance':
            return `
                <div class="row g-3">
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="name" placeholder="Personal or Business Name" required>
                            <label for="name">Personal or Business Name</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="contactInfo" placeholder="Contact Information" required>
                            <label for="contactInfo">Contact Information</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <textarea class="form-control" id="insuranceNeeds" placeholder="Insurance Needs" style="height: 150px;" required></textarea>
                            <label for="insuranceNeeds">Insurance Needs</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="policyNumber" placeholder="Policy Number" required>
                            <label for="policyNumber">Policy Number</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="idNumber" placeholder="ID Number" required>
                            <label for="idNumber">ID Number</label>
                        </div>
                    </div>
                </div>
            `;
        default:
            return '';
    }
}
