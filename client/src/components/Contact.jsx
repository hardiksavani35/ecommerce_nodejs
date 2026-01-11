export default function Contact() {
    return(
        <>
        <section className="py-12 -mt-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fas fa-phone text-blue-600 text-2xl"></i>
                        </div>
                        <h3 className="font-bold text-gray-800 text-xl mb-2">Call Us</h3>
                        <p className="text-gray-600 mb-2">Mon-Fri from 8am to 6pm</p>
                        <a href="tel:+15551234567" className="text-blue-600 font-semibold hover:underline">+1 (555) 123-4567</a>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all">
                        <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fas fa-envelope text-purple-600 text-2xl"></i>
                        </div>
                        <h3 className="font-bold text-gray-800 text-xl mb-2">Email Us</h3>
                        <p className="text-gray-600 mb-2">We'll respond within 24 hours</p>
                        <a href="mailto:support@shophub.com" className="text-blue-600 font-semibold hover:underline">support@shophub.com</a>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="fas fa-map-marker-alt text-green-600 text-2xl"></i>
                        </div>
                        <h3 className="font-bold text-gray-800 text-xl mb-2">Visit Us</h3>
                        <p className="text-gray-600 mb-2">123 Shopping Street</p>
                        <p className="text-blue-600 font-semibold">New York, NY 10001</p>
                    </div>
                </div>
            </div>
        </section>
    
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12"> 
                    <div className="bg-white rounded-xl shadow-md p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                        <form>
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                                    <input type="text" placeholder="John" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-5000" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                                    <input type="text" placeholder="Doe" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                                <input type="email" placeholder="john.doe@example.com" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                                <input type="tel" placeholder="+1 (555) 000-0000" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                                <select className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>General Inquiry</option>
                                    <option>Order Support</option>
                                    <option>Product Question</option>
                                    <option>Shipping Issue</option>
                                    <option>Return Request</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                                <textarea rows="5" placeholder="Tell us how we can help you..." className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                <i className="fas fa-paper-plane mr-2"></i>Send Message
                            </button>
                        </form>
                    </div>
    
                    <div>
                        <div className="bg-white rounded-xl shadow-md p-8 mb-6">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Office Hours</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-4 border-b">
                                    <span className="font-semibold text-gray-700">Monday - Friday</span>
                                    <span className="text-gray-600">8:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b">
                                    <span className="font-semibold text-gray-700">Saturday</span>
                                    <span className="text-gray-600">9:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-gray-700">Sunday</span>
                                    <span className="text-red-600">Closed</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-md p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
                            <p className="mb-6 text-blue-100">Our customer support team is available 24/7 via live chat.</p>
                            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                                <i className="fas fa-comments mr-2"></i>Start Live Chat
                            </button>
                        </div>

                        <div className="mt-6 bg-white rounded-xl shadow-md p-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors">
                                    <i className="fab fa-youtube"></i>
                                </a>
                                <a href="#" className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600">Quick answers to common questions</p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all">
                        <div className="flex justify-between items-start cursor-pointer">
                            <div>
                                <h3 className="font-bold text-gray-800 mb-2">What are your shipping options?</h3>
                                <p className="text-gray-600 text-sm">We offer free standard shipping on orders over $50. Express shipping is available for an additional fee.</p>
                            </div>
                            <i className="fas fa-chevron-down text-gray-400"></i>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all">
                        <div className="flex justify-between items-start cursor-pointer">
                            <div>
                                <h3 className="font-bold text-gray-800 mb-2">What is your return policy?</h3>
                                <p className="text-gray-600 text-sm">We accept returns within 30 days of purchase. Items must be unused and in original packaging.</p>
                            </div>
                            <i className="fas fa-chevron-down text-gray-400"></i>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all">
                        <div className="flex justify-between items-start cursor-pointer">
                            <div>
                                <h3 className="font-bold text-gray-800 mb-2">How can I track my order?</h3>
                                <p className="text-gray-600 text-sm">Once your order ships, you'll receive a tracking number via email. You can also check your order status in your account.</p>
                            </div>
                            <i className="fas fa-chevron-down text-gray-400"></i>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all">
                        <div className="flex justify-between items-start cursor-pointer">
                            <div>
                                <h3 className="font-bold text-gray-800 mb-2">Do you offer international shipping?</h3>
                                <p className="text-gray-600 text-sm">Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.</p>
                            </div>
                            <i className="fas fa-chevron-down text-gray-400"></i>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all">
                        <div className="flex justify-between items-start cursor-pointer">
                            <div>
                                <h3 className="font-bold text-gray-800 mb-2">What payment methods do you accept?</h3>
                                <p className="text-gray-600 text-sm">We accept all major credit cards, PayPal, Apple Pay, Google Pay, and Shop Pay.</p>
                            </div>
                            <i className="fas fa-chevron-down text-gray-400"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Visit Our Store</h2>
                    <p className="text-gray-600">Find us at our flagship location</p>
                </div>
                <div className="bg-gray-300 rounded-xl overflow-hidden h-96 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                        <i className="fas fa-map-marked-alt text-6xl mb-4"></i>
                        <p className="text-xl font-semibold">Interactive Map</p>
                        <p className="text-sm">123 Shopping Street, New York, NY 10001</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}