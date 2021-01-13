# PasswordGenerator

[View deployed application](https://rsowald.github.io/PasswordGenerator)

## About this Project
This project is a simple password generator that allows the user to select the password criteria. 

In a world of advanced technology and frequent internet usage, cyber security is constantly facing new challenges and making advances. Nearly every application a web user interacts with requires credentials. That is a lot of different passwords to come up with, or a great security vulerability to reuse a password for many applications. One of the most basic ways to improve the strength of a password is to ensure that it is not based on a dictionary word. A random password generator supplies an ideal solution.

There are many password generators available, but many do not allow the user to specify what kind of characters to allow or a specific length. The ability to choose character type criteria is very handy because many applications require the inclusion of at least two different character types. On the one hand, adding special characters and numbers to a password increases its strength considerably, but it does make it more difficult to memorize. By allowing the user to select the criteria, they can decide the best combination for their specific application. A low-risk application would be fine with a short length with one or two character types, but a high-risk application like a banking website warrants a longer and more complex password. This generator does limit the user to a range of 8-128 characters for a balance of a mininmum level of security with a cap to avoid a password of rediculous length. In fact, according the OWASP, passwords over 128 bits of entropy are considered impervious to brute force breaking attempts, so 128 characters already far surpasses that threshold. 

I started with a simple responsive HTML form with an output field and a "Generate Password" button to initialize the application. Then, I used Javascript to provide prompt and confirm popup boxes for the user to select the criteria. I created two functions that ran in loops to collect the criteria and check for valid selections (ie the length has to be 8-128 characters and at least one set of characters must be selected). I then took the selected character types and made one string of the allowed characters. Finally, I chose random characters from that string within a for-loop to build a password string of the length specified by the user. The user may copy the returned password from the output field or write it down for memorization and later use.

## Usage

## Future Feature
- I would like to include a validation to check that at least one of each type of character that was confirmed true is included in the final generated password.
- There is some debate over whether some special characters are more vulnerable to password crackers, so further research may warrant limiting available special characters.

## References
For excellent tips on password criteria and length:
https://www.csoonline.com/article/3228106/want-stronger-passwords-understand-these-4-common-password-security-myths.html