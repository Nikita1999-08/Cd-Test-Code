import { LightningElement, api, track } from 'lwc';
import activateAccount from '@salesforce/apex/CreateContactOnAccountInsersion.createContact';

export default class activateAccountbyLwc extends LightningElement {
    @api recordId;
    @track activationSummary = '';
   @track activeAccount;
    handleSummaryChange(event) {
       this.activationSummary = event.target.value;
       this.activeAccount = true;
    }

    activateAccount() {
        activateAccount({ accountId: this.recordId, activationSummary: this.activationSummary, activeAccount:this.activeAccount })
            .then(() => {
               console.log('Account Updated');
            })
            .catch((error) => {
               console.log('error--', error);
            });
    }
}
