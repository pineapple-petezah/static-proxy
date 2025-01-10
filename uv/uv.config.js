// There are 2 bare servers in PeteZah Games.  
// The primary is hosted by Benrogo.net and is science.petezahgames.com.  It feeds off of bare.benrogo.net
// The second is hosted by me and is a backup, it is bare.petezahgames.com.
// PeteZah has hid more, and vip's can gain access to websites that have these servers.  Email contact@petezahgames.com to find out.
// bare-sigma.yourmom.eu.org is one that is blocked and yet works well.
// https://v2202412246404304352.megasrv.de/bare/ works too.  Thanks Benrogo :)!!!

self.__uv$config = {
    prefix: '/static/ixl/',
    bare:'/b/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'uv/uv.handler.js',
    bundle: 'uv/uv.bundle.js',
    config: 'uv/uv.config.js',
    sw: 'uv/uv.sw.js',
};
