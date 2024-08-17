function showForm() {
    const service = document.getElementById('serviceSelect').value;
    const formContainer = document.getElementById('formContainer');
    formContainer.innerHTML = ''; // Clear previous form

    if (service === '') return;

    let formHTML = `
        <h2 class="display-4 mb-4 text-center">${getServiceTitle(service)}</h2>
        <p>Please fill out the form and upload proof of payment. Our account number is: <strong>63080668222</strong></p>
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
        case 'microLending': return 'Micro Lending';
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
                            <label for="businessPlan">Business Plan (optional)</label>
                        </div>
                    </div>
                </div>
            `;
        
        case 'tenderServices':
    return `
        <div class="row g-3">
            <div class="col-md-6">
                <div class="form-floating">
                    <input type="text" class="form-control" id="businessName" placeholder="Preferred Business Name" required>
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
                    <input type="file" class="form-control" id="tenderDocument" placeholder="Tender Document (if available)" required>
                    <label for="tenderDocument">Tender Document</label>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-floating">
                    <textarea class="form-control" id="relevantExperience" placeholder="Relevant Experience" style="height: 150px;" required></textarea>
                    <label for="relevantExperience">Relevant Experience</label>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-floating">
                    <input type="file" class="form-control" id="financialStatements" placeholder="Financial Statements" required>
                    <label for="financialStatements">Financial Statements</label>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-floating">
                    <input type="text" class="form-control" id="idNumber" placeholder="ID Number" required>
                    <label for="idNumber">ID Number</label>
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
                            <input type="text" class="form-control" id="idNumber" placeholder="ID Number" required>
                            <label for="idNumber">ID Number</label>
                        </div>
                    </div>
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
                            <input type="text" class="form-control" id="idNumber" placeholder="ID Number" required>
                            <label for="idNumber">ID Number</label>
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
        case 'microLending':
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
                            <input type="number" class="form-control" id="loanAmount" placeholder="Loan Amount" required>
                            <label for="loanAmount">Loan Amount</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <textarea class="form-control" id="loanPurpose" placeholder="Purpose of Loan" style="height: 150px;" required></textarea>
                            <label for="loanPurpose">Purpose of Loan</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <textarea class="form-control" id="repaymentPlan" placeholder="Repayment Plan" style="height: 150px;" required></textarea>
                            <label for="repaymentPlan">Repayment Plan</label>
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
        case 'stockvelSocietyGroups':
            return `
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
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="personalDetails" placeholder="Personal Details" required>
                            <label for="personalDetails">Personal Details</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <textarea class="form-control" id="currentFinancialStatus" placeholder="Current Financial Status" style="height: 150px;" required></textarea>
                            <label for="currentFinancialStatus">Current Financial Status</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <textarea class="form-control" id="retirementGoals" placeholder="Retirement Goals" style="height: 150px;" required></textarea>
                            <label for="retirementGoals">Retirement Goals</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <textarea class="form-control" id="existingPlans" placeholder="Existing Plans" style="height: 150px;" required></textarea>
                            <label for="existingPlans">Existing Plans</label>
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
        case 'wealthManagement':
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
                            <textarea class="form-control" id="currentFinancialStatus" placeholder="Current Financial Status" style="height: 150px;" required></textarea>
                            <label for="currentFinancialStatus">Current Financial Status</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <textarea class="form-control" id="financialGoals" placeholder="Financial Goals" style="height: 150px;" required></textarea>
                            <label for="financialGoals">Financial Goals</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <textarea class="form-control" id="investmentPreferences" placeholder="Investment Preferences" style="height: 150px;" required></textarea>
                            <label for="investmentPreferences">Investment Preferences</label>
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
