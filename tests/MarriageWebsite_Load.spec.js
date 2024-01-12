import {test, expect} from "@playwright/test";
import {waitForElement} from "@testing-library/dom"



test ("Marriage Applicaiton", async ({page}) => {
    await page.goto("https://clerkconnectdevtest.azurewebsites.net/login");

    //Click on Marriage Application

    await page.getByRole('row',{name: 'More info EVAULT TEST Click'}).getByRole('link').nth(1).click();

    //Click On Date Picker, enter date, and click start application
    await page.getByLabel('Open calendar').click();
    await page.getByLabel('Monday January').nth(3).click();
    await page.getByRole('button', { name: 'Start Application Start' }).click();




    //Enter Party A's information
    await page.getByRole('combobox').first().selectOption('Groom');
    await page.getByRole('combobox').nth(1).selectOption('Male');

    //First row

    await page.locator('input').first().pressSequentially('Kevin');
    await page.locator('div:nth-child(3) > .form-control').first().pressSequentially('Green');

    //Second row
    await page.locator('.breathingRoom > .layout-row > div > .form-control').first().pressSequentially('800 North Market');
    await page.locator('.breathingRoom > .layout-row > div:nth-child(2) > .form-control').first().pressSequentially('Bossier');
    await page.locator('.breathingRoom > .layout-row > div:nth-child(3) > .form-control').first().pressSequentially('Webster');
    await page.locator('.breathingRoom > .layout-row > div:nth-child(4) > .form-control').first().pressSequentially('LA')
    await page.locator('.breathingRoom > .layout-row > div:nth-child(5) > .form-control').first().pressSequentially('71055')

    //Third row
    await page.locator('div:nth-child(4) > .layout-row > div > .form-control').first().pressSequentially('318-890-4578');
    await page.locator('div:nth-child(4) > .layout-row > div:nth-child(3) > .form-control').first().pressSequentially('None');
    await page.locator('div:nth-child(4) > .layout-row > div:nth-child(4) > .form-control').first().pressSequentially('10/11/1995');
    await page.locator('div:nth-child(4) > .layout-row > div:nth-child(5) > .form-control').first().pressSequentially('Shreveport');

    //Fourth row
    await page.locator('div:nth-child(5) > .layout-row > div > .form-control').first().pressSequentially('Mother');
    await page.locator('div:nth-child(5) > .layout-row > div:nth-child(2) > .form-control').first().pressSequentially('Colorado');

    //Click Next
    await page.getByRole('tab', { name: 'Step 2- Party B InComplete' }).click();
    //await page.getByRole('button', { name: 'Next Next' }).click();

    // Assert Page 2 ---------------------------------------------
    //await page.waitForURL('');
    //Establishing delay
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

    //Enter Party B's information 
    await delay(2000);
    await page.getByRole('combobox').first().selectOption('Bride');
    await page.getByRole('combobox').nth(1).selectOption('Female');

    //First Row of information
    await page.locator('div > div > div > .ng-isolate-scope > div > div:nth-child(2) > div > .form-control').first().pressSequentially('Martha');
    await page.locator('div > div > div > .ng-isolate-scope > div > div:nth-child(2) > div:nth-child(3) > .form-control').pressSequentially('Stewart');

    //Second 

    await page.locator('div > div > div > .ng-isolate-scope > div > div:nth-child(3) > .layout-row > div > .form-control').first().pressSequentially('Data');
    await page.locator('div > div > div > .ng-isolate-scope > div > div:nth-child(3) > .layout-row > div:nth-child(2) > .form-control').pressSequentially('Shreveport');
    await page.locator('div > div > div > .ng-isolate-scope > div > div:nth-child(3) > .layout-row > div:nth-child(3) > .form-control').pressSequentially('Webster');
    await page.locator('div > div > div > .ng-isolate-scope > div > div:nth-child(3) > .layout-row > div:nth-child(4) > .form-control').pressSequentially('LA');
    await page.locator('div > div > div > .ng-isolate-scope > div > div:nth-child(3) > .layout-row > div:nth-child(5) > .form-control').pressSequentially('71105');

    //Third 
    await page.locator('div > div > div > .ng-isolate-scope > div > div:nth-child(4) > .layout-row > div > .form-control').first().pressSequentially('318-780-1987');
    await page.locator('div > div > div > .ng-isolate-scope > div > div:nth-child(4) > .layout-row > div:nth-child(3) > .form-control').pressSequentially('White');
    await page.locator('div > div > div > .ng-isolate-scope > div > div:nth-child(4) > .layout-row > div:nth-child(4) > .form-control').pressSequentially('01/11/1994');
    await page.locator('div > div > div > .ng-isolate-scope > div > div:nth-child(4) > .layout-row > div:nth-child(5) > .form-control').pressSequentially('Caddo');

    //Fourth
    await page.locator('div > div > div > .ng-isolate-scope > div > div:nth-child(5) > .layout-row > div > .form-control').first().pressSequentially('Jane');
    await page.locator('div > div > div > .ng-isolate-scope > div > div:nth-child(5) > .layout-row > div:nth-child(2) > .form-control').pressSequentially('LA')

    //Press Next 
    await page.getByRole('button', { name: 'Next Next' }).click();

    //Press Next again

    const lastNext = page.getByRole('button', { name: 'Next Next' }).nth(1);
    lastNext.scrollIntoViewIfNeeded();
    page.keyboard.press('PageUp');
    await lastNext.click();

    //Enter # of certified copies
    page.keyboard.press('PageUp');
    const certifiedCopes = page.locator('.tab-content > div > .layout-row > .form-group > .form-control')
    await certifiedCopes.press('ArrowRight');
    await certifiedCopes.press('Backspace');
    await certifiedCopes.pressSequentially('2');

    //Submitting Marriage Application
    await page.getByRole('button', { name: 'Submit to Clerk' }).click();
    


   
    
    
    





})