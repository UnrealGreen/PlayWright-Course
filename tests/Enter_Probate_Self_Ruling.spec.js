import { test, expect } from '@playwright/test';
import { ProbatePage_SelfProving } from '../page_objects/ProbatePage_SelfProving';

test.only('Enter Probate 2', async ({ page }) => {

    const selfProving = new ProbatePage_SelfProving(page)
    await selfProving.vistAndLogIn()
    await page.locator('#MainNavBar i').click();
    await page.locator('div').filter({ hasText: /^File$/ }).click();
    await page.locator('div').filter({ hasText: /^New Case$/ }).click();
    await page.locator('div').filter({ hasText: /^Estates$/ }).click();
    await page.getByText('Petition to Probate Will', { exact: true }).click();
    await page.getByPlaceholder('Select case sub-type...').click();
    await page.getByRole('link', { name: 'Petition to Probate Will (Self-Proving)' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('textbox', { name: 'Text input', exact: true }).click();
    await page.getByRole('textbox', { name: 'Text input', exact: true }).fill('Here is the description, ');
    await page.getByRole('textbox', { name: 'Masked text input' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByText('First Name:').fill('Kevin');
    await page.getByText('Last Name:').fill('Green');await page.getByPlaceholder('Select date...').first().click();
    await page.getByPlaceholder('Select sex...').click();
    await page.getByRole('link', { name: 'Male', exact: true }).click();
    await page.getByPlaceholder('Select date...').first().fill('01/01/2000');
    await page.getByPlaceholder('Select date...').first().press('Tab');
    await page.getByPlaceholder('Select date...').nth(1).fill('01/01/2023');
    await page.getByPlaceholder('Select date...').nth(1).press('Tab');
    await page.getByPlaceholder('Select state...').first().press('Tab');

    //I can't seem to enter shit past this point
    await page.locator('div:nth-child(3) > .lib-file-wizard-grid-col-form > .row > div:nth-child(2)').pressSequentially('Bossier');
    
    await page.getByText('Address:').pressSequentially('10 North Market Road');
    await page.getByText('City:').fill('Bossier');
    await page.getByPlaceholder('Select state...').nth(1).pressSequentially('LA');
    await page.getByPlaceholder('Select state...').nth(1).press('Tab');
    await page.getByLabel('Masked text input').nth(2).pressSequentially('71111');
    await page.getByRole('button', { name: 'Next' }).click();

    //Petitioner Tab
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByRole('dialog').getByText('First Name:').pressSequentially('Kevin');
    await page.getByRole('dialog').getByText('Last Name:').pressSequentially('Green');
    await page.getByRole('button', { name: 'Open or close the dropdown' }).nth(2).click();
    await page.getByRole('link', { name: 'Mr', exact: true }).click();
    await page.getByRole('button', { name: 'Open or close the dropdown' }).nth(3).click();
    await page.getByRole('link', { name: 'Male', exact: true }).click();
    await page.getByRole('dialog').getByText('Address:').pressSequentially('50 West Broken Road');
    await page.getByRole('dialog').getByText('Address 2:').pressSequentially('APT 57');
    await page.getByRole('dialog').locator('div').filter({ hasText: 'City:' }).nth(4).pressSequentially('Bossier');
    await page.getByRole('button', { name: 'Open or close the dropdown' }).nth(4).click();
    await page.getByRole('link', { name: 'AR' }).click();
    await page.getByRole('dialog').locator('div').filter({ hasText: 'ZIP:' }).nth(4).pressSequentially('71105');
  





    


    




    


   

   



});