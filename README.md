Installation
------------
### Prerequisites
*	A web server
*   A working Argos SDK/Argos SalesLogix environment

### Clone repository
1.	Open a command prompt
2.	change to the base directory where you cloned [Argos SDK][argos-sdk], eg:

		cd \projects\sage\mobile
3.	Execute the following commands (clone command shown with READ-ONLY URL; if you are a commiter, use the appropriate Read+Write URL).

		cd products
		git clone git://github.com/SageScottsdalePlatform/argos-gcrm.git

    __Note:__ If you're downloading and extracting the zip file instead of using git directly, the top-level folder in your download will probably be named something like "SageScottsdalePlatform-argos-saleslogix-nnnnn". You'll want to rename this folder to argos-saleslogix, and put it under your products sub-folder. You'll end up with a folder structure like this:
        ...\mobile\argos-sdk
        ...\mobile\products\argos-saleslogix
        ...\mobile\products\argos-gcrm

### Setup and run the application in "debug" mode
1.	On your web server, create a Virtual Directory (IIS6), an Application (IIS7), or an Alias (Apache), or functional equivalent, called `mobile`, pointing to the base directory where you cloned [Argos SDK][argos-sdk], eg:

		cd \projects\sage\mobile
2.	In your browser, navigate to the path `/mobile/products/argos-gcrm/index-dev.html` on your web server, eg:

		http://localhost/mobile/products/argos-gcrm/index-dev.html

### Building A Release Version

#### Requirements
*	Windows

#### Steps
1.	Save this [gist](https://gist.github.com/815451) as `build-module.cmd` to directory where you cloned [Argos SDK][argos-sdk].
2.	Open a command prompt and excute the following, changing paths as appropriate, eg:

		cd \projects\sage\mobile
		build-module gcrm
3.	The deployed module will be in a `deploy` folder in the directory where you cloned [Argos SDK][argos-sdk].

### Deploying

#### Steps
1.	Open the deploy folder for the module, eg:

		mobile\deploy\argos-gcrm
2.  Copy the entire contents of the module's deploy folder (eg: `mobile\deploy\argos-gcrm`) to the folder where `argos-saleslogix` was deployed.
3.  Add the required lines to `index.html` and `index-nocache.html` in order to load the module.

        <link type="text/css" rel="stylesheet" href="content/css/argos-gcrm.css" />
        <script type="text/javascript" src="content/javascript/argos-gcrm.js"></script>
        <script type="text/javascript" src="configuration/gcrm/production.js"></script>
4.  If the module uses a separate SData server that is hosted elsewhere, some changes must be made to `index.manifest` and `template.manifest`, as well as the server hosting SData.
    * For both `index.manifest` and `template.manifest`, add the full SData server URL, including the trailing slash, to the end of the `NETWORK:` section, eg:

			NETWORK:
			../sdata/
			http://mysdataserver/sdata/
	* CORS (Cross Origin Resource Sharing) must be enabled on the SData server.  You can find documentation for setting it up on IIS at: [Setting-Up-CORS](https://github.com/SageScottsdalePlatform/argos-sdk/wiki/Setting-Up-CORS).

[argos-sdk]: https://github.com/SageScottsdalePlatform/argos-sdk "Argos SDK Source"