import { CustomEqualsValidatorDirective } from './custom-equals-validator.directive';

describe('CustomEqualsValidatorDirective', () => {
  it('should create an instance', () => {
    const directive = new CustomEqualsValidatorDirective('test');
    expect(directive).toBeTruthy();
  });
});
