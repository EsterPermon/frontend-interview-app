import {
  AGE_INPUT_DATA_CY,
  AGE_STEP_DATA_CY,
  EMAIL_INPUT_DATA_CY,
  EMAIL_STEP_DATA_CY,
  ERROR_MESSAGE_DATA_CY,
  FIRST_NAME_INPUT_DATA_CY,
  FULL_NAME_STEP_DATA_CY,
  LAST_NAME_INPUT_DATA_CY,
  NEXT_STEP_BUTTON_DATA_CY,
  PURCHASE_LINK_DATA_CY,
  SUMMARY_STEP_DATA_CY,
} from '../../../src/utils/dataCyConstants'

export const testFullNameStep = (firstname: string, lastname: string) => {
  cy.get(`[data-cy="${FULL_NAME_STEP_DATA_CY}"]`)
  cy.get(`[data-cy="${NEXT_STEP_BUTTON_DATA_CY}"]`).should('be.disabled')
  cy.get(`[data-cy="${ERROR_MESSAGE_DATA_CY}"]`).should('be.visible')

  cy.get(`[data-cy="${FIRST_NAME_INPUT_DATA_CY}"]`).type(firstname)
  cy.get(`[data-cy="${NEXT_STEP_BUTTON_DATA_CY}"]`).should('be.disabled')
  cy.get(`[data-cy="${ERROR_MESSAGE_DATA_CY}"]`).should('be.visible')

  cy.get(`[data-cy="${LAST_NAME_INPUT_DATA_CY}"]`).type(lastname)
  cy.get(`[data-cy="${ERROR_MESSAGE_DATA_CY}"]`).should('not.exist')
  cy.get(`[data-cy="${NEXT_STEP_BUTTON_DATA_CY}"]`).click()
}

export const testEmailStep = (email: string) => {
  cy.get(`[data-cy="${EMAIL_STEP_DATA_CY}"]`)
  cy.get(`[data-cy="${NEXT_STEP_BUTTON_DATA_CY}"]`).should('be.disabled')
  cy.get(`[data-cy="${ERROR_MESSAGE_DATA_CY}"]`).should('be.visible')

  cy.get(`[data-cy="${EMAIL_INPUT_DATA_CY}"]`).type(email)
  cy.get(`[data-cy="${ERROR_MESSAGE_DATA_CY}"]`).should('not.exist')
  cy.get(`[data-cy="${NEXT_STEP_BUTTON_DATA_CY}"]`).click()
}

export const testAgeStep = (age: string) => {
  cy.get(`[data-cy="${AGE_STEP_DATA_CY}"]`)
  cy.get(`[data-cy="${NEXT_STEP_BUTTON_DATA_CY}"]`).should('be.disabled')
  cy.get(`[data-cy="${ERROR_MESSAGE_DATA_CY}"]`).should('be.visible')

  cy.get(`[data-cy="${AGE_INPUT_DATA_CY}"]`).type(age)
  cy.get(`[data-cy="${ERROR_MESSAGE_DATA_CY}"]`).should('not.exist')
  cy.get(`[data-cy="${NEXT_STEP_BUTTON_DATA_CY}"]`).click()
}

export const testSummaryStep = (fields: string[]) => {
  fields.forEach((field) => {
    cy.get(`[data-cy="${SUMMARY_STEP_DATA_CY}"]`).contains(field)
  })
  cy.get(`[data-cy="${PURCHASE_LINK_DATA_CY}"]`).click()
}
