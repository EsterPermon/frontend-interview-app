export enum InputType {
  text = 'text',
  number = 'number',
  email = 'email',
}

export enum StepType {
  age = 'Age',
  email = 'Email',
  summary = 'Summary',
  fullname = 'Full Name'
}

export enum ProductIds {
  devIns = 'dev_ins',
  designIns = 'design_ins'
}

export const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
  [ProductIds.designIns]: 'Design Insurance',
}
