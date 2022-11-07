/// <reference types="cypress" />

import {
  ProductIds,
  PRODUCT_IDS_TO_NAMES,
  StepType,
} from '../../src/utils/constants'
import {
  DESIGN_INSURANCE_DATA_CY,
  DEV_INSURANCE_DATA_CY,
  HOME_PAGE_DATA_CY,
} from '../../src/utils/dataCyConstants'
import {
  testAgeStep,
  testEmailStep,
  testFullNameStep,
  testSummaryStep,
} from './utils/steps'

describe('Home page', () => {
  before(() => {
    cy.visit('/')
  })

  it('Should find links for all products', () => {
    cy.get(`[data-cy="${HOME_PAGE_DATA_CY}"]`)
    cy.get(`[data-cy="${DESIGN_INSURANCE_DATA_CY}"]`)
    cy.get(`[data-cy="${DEV_INSURANCE_DATA_CY}"]`)
  })
})

describe('Buyflow', () => {
  const firstname = 'john'
  const lastname = 'doe'
  const fullname = `${firstname} ${lastname}`
  const age = '21'
  const email = 'johndoe@email.com'

  describe(`Buy ${PRODUCT_IDS_TO_NAMES[ProductIds.designIns]}`, () => {
    it('Should select product', () => {
      cy.get(`[data-cy="${DESIGN_INSURANCE_DATA_CY}"]`).click()
    })

    it(`Should go to ${StepType.fullname} step`, () => {
      testFullNameStep(firstname, lastname)
    })

    it(`Should go to ${StepType.email} step`, () => {
      testEmailStep(email)
    })

    it(`Should go to ${StepType.age} step`, () => {
      testAgeStep(age)
    })

    it(`Should go to ${StepType.summary} step`, () => {
      testSummaryStep([fullname, email, age])
    })

    it(`Should go to home page after purchase`, () => {
      cy.get(`[data-cy="${HOME_PAGE_DATA_CY}"]`)
    })
  })

  describe(`Buy ${PRODUCT_IDS_TO_NAMES[ProductIds.devIns]}`, () => {
    it('Should select product', () => {
      cy.get(`[data-cy="${DEV_INSURANCE_DATA_CY}"]`).click()
    })

    it(`Should go to ${StepType.email} step`, () => {
      testEmailStep(email)
    })

    it(`Should go to ${StepType.age} step`, () => {
      testAgeStep(age)
    })

    it(`Should go to ${StepType.summary} step`, () => {
      testSummaryStep([email, age])
    })

    it(`Should go to home page after purchase`, () => {
      cy.get(`[data-cy="${HOME_PAGE_DATA_CY}"]`)
    })
  })
})
