module.exports = function(){
    function pdf(file){

          if(file === 'BEE'){
            return "/certs/BEE.pdf"
        }

        else if(file === 'COIDA'){
            return "/certs/LOGS-AtlanticCoreProjects.pdf"
        }

        else if(file === 'CIDBA'){
           return "/certs/CIDB-Registration.pdf"
        }
        else{
            return "/certs/COR14.3-RegCert.pdf"
        }
    }

    function heads(file){
        if(file === 'BEE'){
            return "LEVEL1 Contributor in terms of the B-BBEE Codes, 100% Black Femaled owned"
        }

        else if(file === 'COIDA'){
            return "COIDA Registration Number: 990001151811"
        }

        else if(file === 'CIDB'){
           return "CIDB CRN: 10174616 Grade: 1GB & 1CE"
        }
        else{
            return "Company Registration Number: 2018/292055/07"
        }
    }
    return{
        pdf,
        heads
    }
}