const DETAILS = {
  Continue : "The server has received the request headers and the client should proceed to send the request body",
  SwitchingProtocols: "The requester has asked the server to switch protocols and the server has agreed to do so",
  Processing  : "This code indicates that the server has received and is processing the request, but no response is available yet.",
  Ok : "Standard response for successful HTTP requests.",
  Created : "The request has been fulfilled, resulting in the creation of a new resource.",
  Accepted : "The request has been accepted for processing, but the processing has not been completed. ",
  NonAuthoritative : "The server is a transforming proxy (e.g. a Web accelerator) that received a 200 OK from its origin, but is returning a modified version of the origin's response.",
  NoContent : "The server successfully processed the request, and is not returning any content.",
  PartialContent : "The server is delivering only part of the resource (byte serving) due to a range header sent by the client. The range header is used by HTTP clients to enable resuming of interrupted downloads, or split a download into multiple simultaneous streams.",
  MultiStatus : "The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.",
  MultipleChoices : "Indicates multiple options for the resource from which the client may choose (via agent-driven content negotiation). For example, this code could be used to present multiple video format options, to list files with different filename extensions, or to suggest word-sense disambiguation.",
  MovedPermanently : "This and all future requests should be directed to the given URI.",
  Found : "Tells the client to look at (browse to) another URL.",
  SeeOther : "The response to the request can be found under another URI using the GET method. When received in response to a POST (or PUT/DELETE), the client should presume that the server has received the data and should issue a new GET request to the given URI.",
  NotModified : "ndicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match. In such case, there is no need to retransmit the resource since the client still has a previously-downloaded copy.",
  UseProxy : "The requested resource is available only through a proxy, the address for which is provided in the response. For security reasons, many HTTP clients (such as Mozilla Firefox and Internet Explorer) do not obey this status code.",
  TemporaryRedirect : "In this case, the request should be repeated with another URI; however, future requests should still use the original URI. In contrast to how 302 was historically implemented, the request method is not allowed to be changed when reissuing the original request. For example, a POST request should be repeated using another POST request.",
  PermanentRedirect : "This and all future requests should be directed to the given URI. 308 parallel the behaviour of 301, but does not allow the HTTP method to change. So, for example, submitting a form to a permanently redirected resource may continue smoothly.",
  BadRequest : "The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, size too large, invalid request message framing, or deceptive request routing)",
  Unauthorized  : "Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided. ",
  PaymentRequired : "Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, as proposed, for example, by GNU Taler,[33] but that has not yet happened, and this code is not widely used. ",
  Forbidden : "The request contained valid data and was understood by the server, but the server is refusing action. This may be due to the user not having the necessary permissions for a resource or needing an account of some sort, or attempting a prohibited action (e.g. creating a duplicate record where only one is allowed). This code is also typically used if the request provided authentication by answering the WWW-Authenticate header field challenge, but the server did not accept that authentication. The request should not be repeated.",
  NotFound : "The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.",
  MethodNotAllowed : "A request method is not supported for the requested resource; for example, a GET request on a form that requires data to be presented via POST, or a PUT request on a read-only resource.",
  NotAcceptable : "The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.[38] See Content negotiation.",
  ProxyAuthenticationRequired : "The client must first authenticate itself with the proxy.[",
  RequestTimeout : "The server timed out waiting for the request. According to HTTP specifications: `The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time",
  Conflict : "Indicates that the request could not be processed because of conflict in the current state of the resource, such as an edit conflict between multiple simultaneous updates.",
  Gone : "Indicates that the resource requested is no longer available and will not be available again. This should be used when a resource has been intentionally removed and the resource should be purged. Upon receiving a 410 status code, the client should not request the resource in the future. Clients such as search engines should remove the resource from their indices.[41] Most use cases do not require clients and search engines to purge the resource, and a 404 Not Found may be used instead",
  LengthRequired : "The request did not specify the length of its content, which is required by the requested resource.",
  PreconditionFailed : "The server does not meet one of the preconditions that the requester put on the request header fields.",
  PayloadTooLarge : "The request is larger than the server is willing or able to process. Previously called Request Entity Too Large",
  URITooLong : "The URI provided was too long for the server to process. Often the result of too much data being encoded as a query-string of a GET request, in which case it should be converted to a POST request.[45] Called Request-URI Too Long previously.",
  UnsupportedMediaType : "The request entity has a media type which the server or resource does not support. For example, the client uploads an image as image/svg+xml, but the server requires that images use a different format.",
  RangeNotSatisfiable : "The client has asked for a portion of the file (byte serving), but the server cannot supply that portion. For example, if the client asked for a part of the file that lies beyond the end of the file.[48] Called Requested Range Not Satisfiable previously.",
  ExpectationFailed : "The server cannot meet the requirements of the Expect request-header field",
  Teapot : "This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by teapots requested to brew coffee.[51] This HTTP status is used as an Easter egg in some websites, such as Google.com's I'm a teapot easter egg.",
  MisdirectedRequest : "The request was directed at a server that is not able to produce a response",
  UnprocessableEntity : "The request was well-formed but was unable to be followed due to semantic errors.",
  Locked : "The resource that is being accessed is locked.",
  FailedDependency : "The request failed because it depended on another request and that request failed (e.g., a PROPPATCH).",
  TooEarly : "Indicates that the server is unwilling to risk processing a request that might be replayed.",
  UpgradeRequired : "The client should switch to a different protocol such as TLS/1.3, given in the Upgrade header field.",
  PreconditionRequired : "The origin server requires the request to be conditional. Intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.",
  TooManyRequests : "The user has sent too many requests in a given amount of time. Intended for use with rate-limiting schemes.",
  HeaderTooLarge : "The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.",
  NoResponse : " non-standard status code used to instruct nginx to close the connection without sending a response to the client, most commonly used to deny malicious or malformed requests",
  UnavailableForLegalReasons : "A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.[58] The code 451 was chosen as a reference to the novel Fahrenheit 451 (see the Acknowledgements in the RFC).",
  InternalServerError : "A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.",
  NotImplemented : "The server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability (e.g., a new feature of a web-service API).",
  BadGateway : "The server was acting as a gateway or proxy and received an invalid response from the upstream server.",
  ServiceUnavailable : "The server cannot handle the request (because it is overloaded or down for maintenance). Generally, this is a temporary state.",
  GatewayTimeout : "The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.",
  VariantAlsoNegotiates : "Transparent content negotiation for the request results in a circular reference.",
  InsufficientStorage : "The server is unable to store the representation needed to complete the request.",
  LoopDetected : "The server detected an infinite loop while processing the request (sent instead of 208 Already Reported).",
  NotExtended : "Further extensions to the request are required for the server to fulfil it.",
  NetworkAuthenticationRequired : "The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network (e.g., captive portals used to require agreement to Terms of Service before granting full Internet access via a Wi-Fi hotspot).",
  WebServerIsDown : "The origin server refused connections from Cloudflare. Security solutions at the origin may be blocking legitimate connections from certain Cloudflare IP addresses.",
  OriginIsUnreachable : "Cloudflare could not reach the origin server; for example, if the DNS records for the origin server are incorrect or missing.",
  SSLHandshakeFailed : "Cloudflare could not negotiate a SSL/TLS handshake with the origin server.",
  NetworkConnectTimeoutError : "An error used by some HTTP proxies to signal a network connect timeout behind the proxy to a client in front of the proxy.",

}

module.exports = {
    "100" :  {
      "meaning" : "Continue",
      "FunFact": "Catsa are cool",
      "statusCodeDetails": DETAILS.Continue
    },
    "101" :  {
      "meaning" : "Switching Protocols",
      "FunFact": "Cats are believed to be the only mammals who don???t taste sweetness.",
      "statusCodeDetails": DETAILS.SwitchingProtocols
    },
    "102" :  {
      "meaning" : "Processing ",
      "FunFact": "Cats are nearsighted, but their peripheral vision and night vision are much better than that of humans.",
      "statusCodeDetails": DETAILS.Processing 
    },
    "200" :  {
      "meaning" : "OK",
      "FunFact": "Cats are supposed to have 18 toes (five toes on each front paw; four toes on each back paw).",
      "statusCodeDetails": DETAILS.Ok 
    },
    "201" :  {
      "meaning" : "Created",
      "FunFact": "Cats can jump up to six times their length.",
      "statusCodeDetails": DETAILS.Created 
    },
    "202" :  {
      "meaning" : "Accepted",
      "FunFact": "Cats??? collarbones don???t connect to their other bones, as these bones are buried in their shoulder muscles.",
      "statusCodeDetails": DETAILS.Accepted 
    },
    "203" :  {
      "meaning" : "Non-Authoritative Information",
      "FunFact": "Cats have 230 bones, while humans only have 206.",
      "statusCodeDetails": DETAILS.NonAuthoritative 
    },
    "204" :  {
      "meaning" : "No Content",
      "FunFact": "Cats have an extra organ that allows them to taste scents on the air, which is why your cat stares at you with her mouth open from time to time.",
      "statusCodeDetails": DETAILS.NoContent 
    },
    "206" :  {
      "meaning" : "Partial Content",
      "FunFact": "Cats have whiskers on the backs of their front legs, as well.",
      "statusCodeDetails": DETAILS.PartialContent  
    },
    "207" :  {
      "meaning" : "Multi-Status",
      "FunFact": "Cats have nearly twice the amount of neurons in their cerebral cortex as dogs.",
      "statusCodeDetails": DETAILS.MultiStatus 
    },
    "300" :  {
      "meaning" : "Multiple Choices",
      "FunFact": "Cats have the largest eyes relative to their head size of any mammal.",
      "statusCodeDetails": DETAILS.MultipleChoices 
    },
    "301" :  {
      "meaning" : "Moved Permanently",
      "FunFact": "Cats make very little noise when they walk around. The thick, soft pads on their paws allow them to sneak up on their prey ??? or you!",
      "statusCodeDetails": DETAILS.MovedPermanently 
    },
    "302" :  {
      "meaning" : " Found (Previously Moved temporarily)",
      "FunFact": "Cats??? rough tongues can lick a bone clean of any shred of meat.",
      "statusCodeDetails": DETAILS.Found 
    },
    "303" :  {
      "meaning" : "See Other",
      "FunFact": "Cats use their long tails to balance themselves when they???re jumping or walking along narrow ledges.",
      "statusCodeDetails": DETAILS.SeeOther 
    },
    "304" :  {
      "meaning" : "Not Modified",
      "FunFact": "Cats use their whiskers to ???feel??? the world around them in an effort to determine which small spaces they can fit into. A cat???s whiskers are generally about the same width as its body. (This is why you should never, EVER cut their whiskers.)",
      "statusCodeDetails": DETAILS.NotModified 
    },
    "305" :  {
      "meaning" : "Use Proxy (since HTTP/1.1)",
      "FunFact": "Cats walk like camels and giraffes: They move both of their right feet first, then move both of their left feet. No other animals walk this way.",
      "statusCodeDetails": DETAILS.UseProxy 
    },
    "307" :  {
      "meaning" : "Temporary Redirect",
      "FunFact": "Male cats are more likely to be left-pawed, while female cats are more likely to be right-pawed.",
      "statusCodeDetails": DETAILS.TemporaryRedirect 
    },
    "308" :  {
      "meaning" : "Permanent Redirect",
      "FunFact": "Though cats can notice the fast movements of their prey, it often seems to them that slow-moving objects are actually stagnant.",
      "statusCodeDetails": DETAILS.PermanentRedirect 
    },
    "400" :  {
      "meaning" : "Bad Request",
      "FunFact": "Some cats are ambidextrous, but 40 percent are either left- or right-pawed.",
      "statusCodeDetails": DETAILS.BadRequest 
    },
    "401" :  {
      "meaning" : "Unauthorized",
      "FunFact": "Some cats can swim.",
      "statusCodeDetails": DETAILS.Unauthorized  
    },
    "402" :  {
      "meaning" : "Payment Required",
      "FunFact": "There are cats who have more than 18 toes. These extra-digit felines are referred to as being ???polydactyl.???",
      "statusCodeDetails": DETAILS.PaymentRequired 
    },
    "403" :  {
      "meaning" : "Forbidden",
      "FunFact": "A cat???s average lifespan increased by a year over the span of time between 2002 and 2012, according to a study by Banfield Pet Hospital.",
      "statusCodeDetails": DETAILS.Forbidden 
    },
    "404" :  {
      "meaning" : "Not Found",
      "FunFact": "According to The Huffington Post, cats typically sleep for 12 to 16 hours a day.",
      "statusCodeDetails": DETAILS.NotFound 
    },
    "405" :  {
      "meaning" : "Method Not Allowed",
      "FunFact": "Cats are crepuscular, which means that they???re most active at dawn and dusk.",
      "statusCodeDetails": DETAILS.MethodNotAllowed 
    },
    "406" :  {
      "meaning" : "Not Acceptable",
      "FunFact": "Cats are fastidious creatures about their ???bathroom.??? If you have more than one cat, you should have one litter box for each.",
      "statusCodeDetails": DETAILS.NotAcceptable 
    },
    "407" :  {
      "meaning" : "Proxy Authentication Required",
      "FunFact": "Cats can spend up to a third of their waking hours grooming.",
      "statusCodeDetails": DETAILS.ProxyAuthenticationRequired 
    },
    "408" :  {
      "meaning" : "Request Timeout",
      "FunFact": "Cats live longer when they stay indoors.",
      "statusCodeDetails": DETAILS.RequestTimeout 
    },
    "409" :  {
      "meaning" : "Conflict",
      "FunFact": "Cats??? purring may be a self-soothing behavior, since they make this noise when they???re ill or distressed, as well as when they???re happy.",
      "statusCodeDetails": DETAILS.Conflict 
    },
    "410" :  {
      "meaning" : "Gone",
      "FunFact": "Cats will refuse an unpalatable food to the point of starvation.",
      "statusCodeDetails": DETAILS.Gone 
    },
    "411" :  {
      "meaning" : "Length Required",
      "FunFact": "Despite popular belief, many cats are actually lactose intolerant.",
      "statusCodeDetails": DETAILS.LengthRequired 
    },
    "412" :  {
      "meaning" : "Precondition Failed",
      "FunFact": "Female cats have the ability to get pregnant when they are only 4 months old!",
      "statusCodeDetails": DETAILS.PreconditionFailed 
    },
    "413" :  {
      "meaning" : "Payload Too Large",
      "FunFact": "Grapes and raisins, as well as onions, garlic, and chives, are all extremely harmful foods for cats. Grapes and raisins can cause kidney failure ??? although the reasoning behind that isn???t clear. Meanwhile, onions, garlic, and chives wreak havoc on your cat???s gastrointestinal system and can cause anemia.",
      "statusCodeDetails": DETAILS.PayloadTooLarge 
    },
    "414" :  {
      "meaning" : "URI Too Long",
      "FunFact": "Kittens can be spayed or neutered when they are only eight weeks old. If possible, these procedures should be performed in the first 5 months of your cat???s life.",
      "statusCodeDetails": DETAILS.URITooLong 
    },
    "415" :  {
      "meaning" : "Unsupported Media Type",
      "FunFact": "Male cats who have been fixed need fewer calories to maintain their weight.",
      "statusCodeDetails": DETAILS.UnsupportedMediaType 
    },
    "416" :  {
      "meaning" : "Range Not Satisfiable",
      "FunFact": "Spaying and neutering can extend a cat???s life. The Banfield Pet Hospital study found that neutered males live an average of 62 percent longer than unneutered cats and spayed females live an average of 39 percent longer than unspayed cats.",
      "statusCodeDetails": DETAILS.RangeNotSatisfiable 
    },
    "417" :  {
      "meaning" : "Expectation Failed",
      "FunFact": "Your cat???s grooming process stimulates blood flow to his skin, regulates his body temperature and helps him relax.",
      "statusCodeDetails": DETAILS.ExpectationFailed 
    },
    "418" :  {
      "meaning" : " I'm a teapot",
      "FunFact": "A cat with a question-mark-shaped tail is asking, ???Want to play????",
      "statusCodeDetails": DETAILS.Teapot 
    },
    "421" :  {
      "meaning" : "Misdirected Request",
      "FunFact": "According to Wilde, a slow blink is a ???kitty kiss.??? This movement shows contentment and trust.",
      "statusCodeDetails": DETAILS.MisdirectedRequest 
    },
    "422" :  {
      "meaning" : "Unprocessable Entity",
      "FunFact": "Cats have a unique ???vocabulary??? with their owner ??? each cat has a different set of vocalizations, purrs and behaviors.",
      "statusCodeDetails": DETAILS.UnprocessableEntity 
    },
 
    "423" :  {
      "meaning" : "Locked",
      "FunFact": "Cats have up to 100 different vocalizations ??? dogs only have 10.",
      "statusCodeDetails": DETAILS.Locked  
    },
    "424" :  {
      "meaning" : "Failed Dependency",
      "FunFact": "Cats find it threatening when you make direct eye contact with them.",
      "statusCodeDetails": DETAILS.FailedDependency 
    },
    "425" :  {
      "meaning" : "Too Early",
      "FunFact": "Cats may yawn as a way to end a confrontation with another animal. Think of it as their ???talk to the hand??? gesture.",
      "statusCodeDetails": DETAILS.TooEarly 
    },
    "426" :  {
      "meaning" : "Upgrade Required",
      "FunFact": "Hissing is defensive, not aggressive, says Wilde. ???It???s an expression of fear, stress or discomfort of a threatened cat communicating ???stay away,'??? she says.",
      "statusCodeDetails": DETAILS.UpgradeRequired 
    },
    "428" :  {
      "meaning" : "Precondition Required",
      "FunFact": "If cats are fighting, the cat that???s hissing is the more vulnerable one, says Wilde.",
      "statusCodeDetails": DETAILS.PreconditionRequired 
    },
    "429" :  {
      "meaning" : "Too Many Requests",
      "FunFact": "If your cat approaches you with a straight, almost vibrating tail, this means that she is extremely happy to see you.",
      "statusCodeDetails": DETAILS.TooManyRequests 
    },
    "431" :  {
      "meaning" : "Request Header Fields Too Large",
      "FunFact": "Kneading ??? which some people refer to as ???making biscuits??? ??? is a sign of contentment and happiness. Cats knead their mothers when they are nursing to stimulate the let-down of milk.",
      "statusCodeDetails": DETAILS.HeaderTooLarge 
    },
    "444" :  {
      "meaning" : "No resonse",
      "FunFact": "Meowing is a behavior that cats developed exclusively to communicate with people.",
      "statusCodeDetails": DETAILS.NoResponse 
    },
    "451" :  {
      "meaning" : "Unavailable For Legal Reasons",
      "FunFact": "When a cat flops over and exposes his belly, it???s not always an invitation for a belly rub. A cat does this when he???s relaxed and showing trust.",
      "statusCodeDetails": DETAILS.UnavailableForLegalReasons 
    },

    "500" :  {
      "meaning" : "Internal Server Error",
      "FunFact": "When cats hit you with retracted claws, they???re playing, not attacking.",
      "statusCodeDetails": DETAILS.InternalServerError 
    },
    "501" :  {
      "meaning" : "Not Implemented",
      "FunFact": "When dogs wag their tails, they may be expressing happiness. But this isn???t the case for cats! When your cat wags her tail, it???s her way of warning you that you are getting on her last nerve.",
      "statusCodeDetails": DETAILS.NotImplemented 
    },
    "502" :  {
      "meaning" : "Bad Gateway",
      "FunFact": "When your cat sticks his butt in your face, he is doing so as a gesture of friendship.",
      "statusCodeDetails": DETAILS.BadGateway 
    },
    "503" :  {
      "meaning" : "Service Unavailable",
      "FunFact": "Whiskers are also good indicators of a cat???s mood. When a cat is scared, he put his whiskers back. But when a cat is in hunting mode, he puts his whiskers forward.",
      "statusCodeDetails": DETAILS.ServiceUnavailable 
    },
    "504" :  {
      "meaning" : "Gateway Timeout",
      "FunFact": "Your cat drapes its tail over another cat, your dog, or you as a symbol of friendship.",
      "statusCodeDetails": DETAILS.GatewayTimeout 
    },
    "506" :  {
      "meaning" : "Variant Also Negotiates",
      "FunFact": "Cats are very fussy about their water bowls; some prefer to ignore their bowls entirely in favor of drinking from the sink faucet.",
      "statusCodeDetails": DETAILS.VariantAlsoNegotiates 
    },
    "507" :  {
      "meaning" : "Insufficient Storage",
      "FunFact": "Cats groom other cats ??? and sometimes people ??? in a ritual called allogrooming.",
      "statusCodeDetails": DETAILS.InsufficientStorage 
    },
    "508" :  {
      "meaning" : "Loop Detected",
      "FunFact": "Cats like to sleep on things that smell like their owners, such as their pillows and dirty laundry (ick!).",
      "statusCodeDetails": DETAILS.LoopDetected 
    },

    "510" :  {
      "meaning" : "Not Extended",
      "FunFact": "Cats love to sleep in laundry baskets, too, because they???re basically hiding places with peep holes.",
      "statusCodeDetails": DETAILS.NotExtended 
    },
    "511" :  {
      "meaning" : "Upgrade RequiredNetwork Authentication Required ",
      "FunFact": "Cats often attack your ankles when they???re bored.",
      "statusCodeDetails": DETAILS.NetworkAuthenticationRequired  
    },
    "521" :  {
      "meaning" : "Web Server Is Down",
      "FunFact": "Certain cats go crazy for foods you wouldn???t expect, like olives, potato chips, and the hops in beer.",
      "statusCodeDetails": DETAILS.WebServerIsDown 
    },
    "523" :  {
      "meaning" : "Origin Is Unreachable",
      "FunFact": "For some reason, cats really dislike citrus scents.",
      "statusCodeDetails": DETAILS.OriginIsUnreachable 
    },
    "525" :  {
      "meaning" : "SSL Handshake Failed",
      "FunFact": "If you can???t find your cat, you should look in a box or a bag, as these are some of their favorite hiding spots!",
      "statusCodeDetails": DETAILS.SSLHandshakeFailed 
    },
    "599" :  {
      "meaning" : "Network Connect Timeout Error",
      "FunFact": "Some cats love the smell of chlorine.",
      "statusCodeDetails": DETAILS.NetworkConnectTimeoutError 
    },
}
