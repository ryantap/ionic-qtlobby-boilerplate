import { NgModule } from '@angular/core';
import { SafePipe } from '../../pipes/safe.pipe';

/**
 * NOTE: This is used as a shared module for components
 */
@NgModule({
  declarations: [
    SafePipe
	],
	exports: [
		SafePipe
	]
})
export class SharedModule {}