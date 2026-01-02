import express from 'express';
import {chromium} from 'playwright';

 const router=express.Router();

router.post('/screenshot',async (req,res)=>{
    const url=req.body.url;
    const browser= await chromium.launch({ headless: false });
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 },
      deviceScaleFactor: 2
    });
    const page = await context.newPage();
    await page.goto(`${url}`);
    const snapshot = await page.locator('body').ariaSnapshot();
console.log(snapshot);
// await page.getByRole('region', { name: 'Notifications (F8)' }).getByRole('button').click();

    await page.screenshot({ path: 'screenshot333.png' ,type: 'png'});
      await browser.close();
    res.send({done:"job done"})
    
    })
export default router;