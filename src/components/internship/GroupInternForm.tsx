"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import {
  COLLEGES,
  TAMIL_NADU_DISTRICTS,
  GRADUATES,
  IYEAR,
  IDOMS,
} from "../../data/internshipOptions";

const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api"
).replace(/\/$/, "");

const DURATIONS = ["15", "30", "60", "90"];

const createMember = () => ({
  name: "",
  phone: "",
  email: "",
  collegeRegisterId: "",
});

export default function GroupInternForm(_props: { internshipType?: string } = {}) {
  // Common group information
  const [college, setCollege] = useState("");
  const [location, setLocation] = useState("");
  const [graduate, setGraduate] = useState("");
  const [year, setYear] = useState("");
  const [domain, setDomain] = useState("");
  const [dateofjoin, setDateofjoin] = useState("");
  const [duration, setDuration] = useState("");

  // Six individual members
  const [members, setMembers] = useState(
    Array.from({ length: 6 }, createMember),
  );

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);

  // Update individual member details
  const updateMember = (index, field, value) => {
    setMembers((prev) =>
      prev.map((member, i) =>
        i === index ? { ...member, [field]: value } : member,
      ),
    );
  };

  // Add member (maximum 15)
  const addMember = () => {
    if (members.length >= 15) return;

    setMembers((prev) => [...prev, createMember()]);
  };

  // Remove additional member (first 6 are compulsory)
  const removeMember = (index) => {
    if (index < 6) return;

    setMembers((prev) => prev.filter((_, i) => i !== index));
  };

  // Select options
  const selectField = (label, options, value, onChange) => (
    <select required value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="" disabled>
        {label}
      </option>

      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );

  // Wednesday date validation
  const isWednesday = (date) => date.getDay() === 3;

  // Submit group
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setResult(null);

    // Common validation
    if (
      !college ||
      !location ||
      !graduate ||
      !year ||
      !domain ||
      !dateofjoin ||
      !duration
    ) {
      setMessage("Please complete all common details.");
      return;
    }

    // Exactly six members
    if (members.length < 6 || members.length > 15) {
      setMessage("A group must contain minimum 6 and maximum 15 members.");
      return;
    }

    // Member validation
    for (let i = 0; i < members.length; i++) {
      const member = members[i];

      if (
        !member.name.trim() ||
        !member.phone.trim() ||
        !member.email.trim() ||
        !member.collegeRegisterId.trim()
      ) {
        setMessage(`Please complete Member ${i + 1} details.`);
        return;
      }

      if (!/^\d{10}$/.test(member.phone)) {
        setMessage(`Enter a valid phone number for Member ${i + 1}.`);
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(member.email)) {
        setMessage(`Enter a valid email for Member ${i + 1}.`);
        return;
      }
    }

    const joiningDate = new Date(`${dateofjoin}T00:00:00`);

    if (joiningDate.getDay() !== 3) {
      setMessage("Please select a Wednesday.");
      return;
    }

    // API payload
    const groupData = {
      college,
      location,
      graduate,
      year,
      domain,
      dateofjoin,
      duration,

      members: members.map((member) => ({
        name: member.name.trim(),
        phone: member.phone.trim(),
        email: member.email.trim(),
        collegeRegisterId: member.collegeRegisterId.trim(),
      })),
    };

    try {
      setLoading(true);

      const response = await fetch(
        `${API_BASE_URL}/leads/create-group-public`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(groupData),
        },
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        // Do not automatically retry: some members might
        // already have been created by the backend.
        if (data.createdLeads?.length) {
          setResult({
            ...data,
            partial: true,
          });
        }

        throw new Error(data.message || "Unable to register group.");
      }

      setResult(data);
      setMessage("Group registration completed successfully!");
    } catch (error) {
      console.error("Group registration:", error);
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="group-intern-form" onSubmit={handleSubmit}>
      {result && (
        <div className="group-popup-overlay">
          <div className="group-popup">
            <div className="group-popup-icon">{result.partial ? "!" : "✓"}</div>

            <h2>
              {result.partial
                ? "Partial Registration"
                : "Group Registration Successful!"}
            </h2>

            <p>
              {result.partial
                ? "Some members were registered. Please contact our team."
                : `All ${result.totalMembers || result.data?.length || 6} members have been registered successfully!`}
            </p>

            <div className="group-reference">
              <span>Group Internship ID</span>
              <strong>{result.groupInternshipId}</strong>
            </div>

            {(result.createdLeads?.length
              ? result.createdLeads
              : result.data || []
            ).map((member, index) => (
              <div className="group-result-member" key={index}>
                <span>{member.name}</span>
                <strong>{member.nexilaID}</strong>
              </div>
            ))}

            <button type="button" onClick={() => window.location.reload()}>
              Done
            </button>
          </div>
        </div>
      )}
      <div className="group-heading">
        <span> NEXILA TECHNOLOGIES </span>
        <h2>Group Internship Registration</h2>
        <p>Register your team together.</p>
        <div className="group-limit">
          GROUP REGISTRATION · MINIMUM 6 / MAXIMUM 15 MEMBERS
        </div>
      </div>

      {/* COMMON DETAILS */}

      <section className="group-section">
        <h3>Common Details</h3>
        <p>These details will be shared by all members.</p>

        <div className="group-grid">
          <div>
            <input
              list="group-colleges"
              placeholder="College Name"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              required
            />

            <datalist id="group-colleges">
              {COLLEGES.map((x) => (
                <option key={x} value={x} />
              ))}
            </datalist>
          </div>

          <div>
            <input
              list="group-districts"
              placeholder="District"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />

            <datalist id="group-districts">
              {TAMIL_NADU_DISTRICTS.map((x) => (
                <option key={x} value={x} />
              ))}
            </datalist>
          </div>

          {selectField("Graduate", GRADUATES, graduate, setGraduate)}

          {selectField("Year of Studying", IYEAR, year, setYear)}

          {selectField("Select Domain", IDOMS, domain, setDomain)}

          <div className="group-date">
            <DatePicker
              selected={dateofjoin ? new Date(`${dateofjoin}T00:00:00`) : null}
              onChange={(date) => {
                if (!date) {
                  setDateofjoin("");
                  return;
                }

                const y = date.getFullYear();
                const m = String(date.getMonth() + 1).padStart(2, "0");
                const d = String(date.getDate()).padStart(2, "0");

                setDateofjoin(`${y}-${m}-${d}`);
              }}
              filterDate={isWednesday}
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              placeholderText="Date of Joining (Wednesday)"
              required
              autoComplete="off"
            />
          </div>
        </div>
      </section>

      {/* INTERNSHIP DURATION */}

      <section className="group-section">
        <h3>Choose Internship Duration</h3>
        <p>Select your group's internship duration.</p>

        <div className="group-duration-grid">
          {DURATIONS.map((days) => (
            <button
              type="button"
              key={days}
              className={duration === days ? "duration-active" : ""}
              onClick={() => setDuration(days)}
            >
              {days} Days
              {duration === days && <span>✓ Selected</span>}
            </button>
          ))}
        </div>
      </section>

      {/* SIX MEMBERS */}

      <section className="group-section">
        <h3>Member Information</h3>
        <p>Minimum 6 members are compulsory. You can add up to 15 members.</p>

        <div className="group-members">
          {members.map((member, index) => (
            <div className="group-member-card" key={index}>
              <div className="member-heading">
                {index >= 6 && (
                  <button
                    type="button"
                    className="remove-member-btn"
                    onClick={() => removeMember(index)}
                  >
                    Remove Member
                  </button>
                )}
                <span>MEMBER {index + 1}</span>
                <span>{index + 1}/6</span>
              </div>

              <div className="group-grid">
                <input
                  placeholder="Full Name"
                  value={member.name}
                  onChange={(e) =>
                    updateMember(
                      index,
                      "name",
                      e.target.value
                        .replace(/[^a-zA-Z\s]/g, "")
                        .replace(/\b\w/g, (char) => char.toUpperCase()),
                    )
                  }
                  required
                />

                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="Contact Number"
                  value={member.phone}
                  onChange={(e) =>
                    updateMember(
                      index,
                      "phone",
                      e.target.value.replace(/\D/g, "").slice(0, 10),
                    )
                  }
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={member.email}
                  onChange={(e) => updateMember(index, "email", e.target.value)}
                  required
                />

                <input
                  placeholder="College Register ID"
                  value={member.collegeRegisterId}
                  onChange={(e) =>
                    updateMember(index, "collegeRegisterId", e.target.value)
                  }
                  required
                />
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="add-member-btn"
          onClick={addMember}
          disabled={members.length >= 15}
        >
          + Add Member ({members.length}/15)
        </button>
      </section>

      {message && <div className="group-message">{message}</div>}

      <button className="group-submit" type="submit" disabled={loading}>
        {loading ? "Registering Group..." : "Submit Group Registration"}
      </button>
    </form>
  );
}
