import React, { useContext } from 'react';
import mapContext from '../../store/map-context';
const CityMap = () => {
        //https://www.image-map.net/
        //https://velog.io/@binhk1004/React-%EC%BD%94%EB%A1%9C%EB%82%98-%ED%98%84%ED%99%A9%ED%8C%90-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EA%B8%B09
        //https://upload.wikimedia.org/wikipedia/commons/3/31/Busan-Administrative_divisions-ko.svg
    const mapCtx = useContext(mapContext)
    console.log(mapCtx.states)
    return (
        <svg 
        xmlnssvg="http://www.w3.org/2000/svg" 
        xmlnsdc="http://purl.org/dc/elements/1.1/" 
        xmlnsrdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
        xmlnsinkscape="http://www.inkscape.org/namespaces/inkscape" 
        xmlnssodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" 
        xmlnscc="http://creativecommons.org/ns#" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        xmlSpace="preserve" 
        id="Busan" x="0px" y="0px" width="100%" height="100%" viewBox="-5.5 60.5 600 450">
            <path id="Buk-gu" fill="#C8C8C8" stroke="#FEFEE9" d={mapCtx.states[0].coord}/>
            <path id="Busanjin-gu" fill="#C8C8C8" stroke="#FEFEE9" d={mapCtx.states[1].coord} />
            <path id="Dong-gu" fill="#C8C8C8" stroke="#FEFEE9" d={mapCtx.states[2].coord} />
            <path id="Dongnae-gu" fill="#C8C8C8" stroke="#FEFEE9" d={mapCtx.states[3].coord} />
            <path id="Geumjeong-gu" fill="#C8C8C8" stroke="#FEFEE9" d={mapCtx.states[4].coord} />
            <path id="Haeundae-gu" fill="#C8C8C8" stroke="#FEFEE9" d={mapCtx.states[5].coord} />
            <path id="Jung-gu" fill="#C8C8C8" stroke="#FEFEE9" d={mapCtx.states[6].coord} />
            <path id="Nam-gu" fill="#C8C8C8" stroke="#FEFEE9" d={mapCtx.states[7].coord} />
            <path id="Saha-gu" fill="#C8C8C8" stroke="#FEFEE9" d={mapCtx.states[8].coord} />
            <path id="Sasang-gu" fill="#C8C8C8" stroke="#FEFEE9" d={mapCtx.states[9].coord} />
            <path id="Seo-gu" fill="#C8C8C8" stroke="#FEFEE9" d={mapCtx.states[10].coord} />
            <path id="Suyeong-gu" fill="#C8C8C8" stroke="#FEFEE9" d={mapCtx.states[11].coord} />
            <path id="Yeongdo-gu" fill="#C8C8C8" stroke="#FEFEE9" d={mapCtx.states[12].coord} />
            <path id="Yeonje-gu" fill="#C8C8C8" stroke="#FEFEE9" d={mapCtx.states[13].coord} />
        </svg>
    );
};

export default CityMap;