it('template forgetpasswordspec', () => {
    cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten")

    // cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten"]').contains('Forgotten Password').click({force:true})

    cy.get('input[name="email"]').type("mohamed.test@gmail.com")
    // cy.get('input[type="submit"]').click()
    cy.contains("Continue").click()

    //cy.on('window:alert',(txt)=>{
       //expect(txt).to.contains('An email with a confirmation link has been sent your email address. :');
      // })
    
      cy.contains('An email with a confirmation link has been sent your email address')
    







})