import { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Copy, Check, CreditCard, MapPin } from 'lucide-react';
import { BankAccountGift } from '../types/wedding.ts';
import { copyToClipboard } from '../utils/clipboardHelper.ts';

interface DigitalGiftSectionProps {
  bankAccounts: BankAccountGift[];
  shippingAddress?: {
    recipientName: string;
    phoneNumber: string;
    fullAddress: string;
  };
}

export function DigitalGiftSection({
  bankAccounts,
  shippingAddress,
}: DigitalGiftSectionProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, text: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <section className="py-20 pb-36 px-4 sm:px-6 bg-ivory-100 relative z-20">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="font-cursive text-3xl sm:text-4xl text-gold-500 block mb-1">
            Wedding Gift
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-medium tracking-wide">
            Tanda Kasih &amp; Hadiah Digital
          </h2>
          <img
            src="/assets/gold-divider-leaves.png"
            alt=""
            aria-hidden="true"
            className="w-48 sm:w-60 h-auto object-contain mx-auto mt-4 opacity-75"
          />
          <p className="font-sans text-xs sm:text-sm text-charcoal-muted max-w-md mx-auto mt-4 leading-relaxed px-2">
            Doa restu Anda merupakan karunia terindah bagi kami. Namun apabila ingin memberikan tanda kasih secara digital, Anda dapat melalui rekening di bawah ini:
          </p>
        </div>

        {/* Bank Account Cards */}
        <div className="space-y-6 max-w-md mx-auto mb-10">
          {bankAccounts.map((account) => {
            const isCopied = copiedId === account.id;

            return (
              <motion.div
                key={account.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-ivory-50/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-gold-500/35 shadow-lg relative overflow-hidden"
              >
                {/* Decorative Subtle Gold Corner Glow */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-gold-400/10 rounded-full blur-2xl pointer-events-none" />

                {/* Card Top: Bank Brand & Chip Dot */}
                <div className="flex items-center justify-between pb-4 border-b border-gold-500/20">
                  <div className="flex items-center gap-2.5 text-charcoal-900 font-sans font-semibold text-sm">
                    <div className="w-8 h-8 rounded-lg bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-600">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <span>{account.bankName}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-gold-400" />
                    <span className="font-mono text-[10px] text-gold-600 uppercase tracking-widest font-semibold">
                      Digital
                    </span>
                  </div>
                </div>

                {/* Card Body: Account Number & Name */}
                <div className="py-4 text-center">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-charcoal-muted block font-medium">
                    Nomor Rekening
                  </span>
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-charcoal-900 tracking-wider block my-1">
                    {account.accountNumber}
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-charcoal-700 font-medium">
                    a.n. {account.accountHolder}
                  </p>
                </div>

                {/* Copy Button (Full-width mobile, centered, perfectly aligned) */}
                <button
                  onClick={() => handleCopy(account.id, account.accountNumber)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-sans font-medium flex items-center justify-center gap-2 transition-all shadow-sm active:scale-98 ${
                    isCopied
                      ? 'bg-sage-600 text-white'
                      : 'bg-gradient-to-r from-gold-500 to-gold-600 hover:brightness-105 text-white shadow-gold-500/20'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Salin Rekening</span>
                    </>
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Physical Gift / Shipping Address */}
        {shippingAddress && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto bg-ivory-50/95 backdrop-blur-md rounded-2xl p-6 border border-gold-500/30 shadow-md text-center"
          >
            <div className="w-10 h-10 mx-auto rounded-full bg-gold-500/10 text-gold-600 flex items-center justify-center mb-3">
              <Gift className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-semibold text-lg text-charcoal-900 mb-1">
              Kirim Kado Fisik
            </h4>
            <div className="flex items-start justify-center gap-2 text-xs text-charcoal-muted max-w-sm mx-auto leading-relaxed mt-2 text-left sm:text-center">
              <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
              <p>
                <strong className="text-charcoal-800">
                  {shippingAddress.recipientName} ({shippingAddress.phoneNumber})
                </strong>
                <br />
                {shippingAddress.fullAddress}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default DigitalGiftSection;
