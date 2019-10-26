# Mobile-OTP
Mobile OTP Confirmation. Not tested yet.

Steps to start
1. First of all register on https://msg91.com/. This service will enable you to send messages for mobile number configuration
2. After registration you will get an Auth Key which will be used later.
3. After that you can use this module for testing, implement in your projects or learn from it.

What to do with the Auth Key???
1. Goto models folder
2. Open otp.js
3. Put your Auth Key there (in the 6th line, depends on your code editor)

How to test???
1. Go to the folder in which app.js exists
2. Open terminal or cmd there
3. Run "node app.js" or "nodemon app.js" or whatever command you use to run the node apps
4. Goto 127.0.0.1:3000/send
5. Enter the number and click submit
6. You will be directed to confirmation page
7. Here you can either enter the otp (correct/wrong) depends on what you are testing
8. Or, you can just try resending the otp
9. If correct otp is entered, Success message is displayed else Failed

**Remember otp would expire in 5 minutes**

Test Cases:
1. Wrong OTP
2. Correct OTP
3. Resend OTP
4. Resend OTP, new OTP received but then also enter old OTP
5. Resend OTP, enter new OTP
6. Try entering OTP after 5 minutes