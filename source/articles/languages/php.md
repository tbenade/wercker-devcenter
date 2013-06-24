---
sidebar_current: "languages-php"
---

## PHP box

The `wercker/php` runs on ubuntu 12.04 and provides multiple versions of PHP. It also includes XDebug, Composer and PHPUnit.

## PHP versions

There are three versions available on the wercker PHP box. The previous stable release PHP 5.3, the current stable release PHP 5.4 and the upcoming release PHP 5.5. By default the current stable release 5.4 is active.

    $ php --version
    PHP 5.4.16 ...

Wercker uses [phpenv](https://github.com/CHH/phpenv) to manage the versions. You can switch the PHP version with the `phpenv global` command:

    $ php --version
    PHP 5.4.16 ...
    $ phpenv global 5.5
    $ php --version
    PHP 5.5.0 ...

## Installing tools

The following package managers are installed PEAR, Pyrus and Composer.

### Composer


